import polars as pl
import json
from datetime import datetime



class Prep_Handler:
    def __init__(self, df:pl.LazyFrame, config_obj:dict) -> None:
        self.config_obj = config_obj



    def handle_filter(self, filter_obj:dict):
        col = filter_obj['column']
        op = filter_obj['operator']
        value = filter_obj['value']
        if op == '>':
            return pl.col(col) >  value
        elif op == '<':
            return pl.col(col) <  value
        elif op == '>=':
            return pl.col(col) >= value
        elif op == '<=':
            return pl.col(col) <= value
        elif op == '=':
            return pl.col(col) == value
        elif op == '!=':
            return pl.col(col) != value
        elif op == "contains":
            return pl.col(col).str.contains(value)
        elif op == "!contains":
            return pl.col(col).str.contains(value).is_not()

    

    def prep_stage(self, df:pl.LazyFrame):
        for x in self.config_obj['steps']:
            if x['type'] == 'filter':
                df = df.filter(self.handle_filter(x['vars']))
        return df



