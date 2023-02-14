import polars as pl
import json



class Analysis_Handler:
    def __init__(self, df:pl.LazyFrame, analysis_obj:dict) -> None:
        self.analysis_obj = analysis_obj



    def handle_groupby(self, df:pl.LazyFrame, groupby_obj:dict):
        column = groupby_obj['column']
        agg = groupby_obj['agg']

        if agg == 'count':
            df = df.groupby(column).agg([pl.col(column).count().alias('{}_count'.format(column))])
            if groupby_obj['sort'] == 'true':
                df = df.sort('{}_count'.format(column), reverse=True if groupby_obj['sort_how']=='desc' else False)
        
        if agg == 'mean':
            df = df.groupby(column).agg([pl.col(column).mean().alias('{}_mean'.format(column))])
            if groupby_obj['sort'] == 'true':
                df = df.sort('{}_mean'.format(column), reverse=True if groupby_obj['sort_how']=='desc' else False)
        
        if agg == 'sum':
            df = df.groupby(column).agg([pl.col(column).sum().alias('{}_sum'.format(column))])
            if groupby_obj['sort'] == 'true':
                df = df.sort('{}_sum'.format(column), reverse=True if groupby_obj['sort_how']=='desc' else False)

        return df



    def analysis_stage(self, df:pl.LazyFrame):
        for x in self.analysis_obj['steps']:
            if x['type'] == 'groupby':
                data = self.handle_groupby(df, x['vars'])
        return data