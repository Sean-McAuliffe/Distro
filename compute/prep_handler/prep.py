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

#df.with_column(pl.col('bar').cast(pl.Int64, strict=False).alias('bar_int'))
    def handle_data_types(self,df:pl.LazyFrame ,dtype_obj:dict)->pl.LazyFrame:
        type_dict = {
            "int": pl.Int64,
            "text": pl.Utf8,
            "float": pl.Float64,
            "bool": pl.Boolean,
            "date": pl.Date
        }
        for x in dtype_obj['columns']:
            try:
                df = df.with_column(pl.col(x['column']).cast(x['should_be'], strict=False))
            except Exception as e:
                print("ERROR:: {}".format(e))
                pass
        return df
    

    def prep_stage(self, df:pl.LazyFrame):
        for x in self.config_obj['steps']:
            if x['type'] == 'filter':
                df = df.filter(self.handle_filter(x['vars']))
            if x['type'] == 'clean':
                df = handle_data_types(df, x)
        return df



