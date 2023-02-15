import polars as pl
import requests


"""
so this class is responsible for finding the datasources we need and 
returning the df pointer to run a query plan against 

needs: csv, excel, sql, api/http


"""
class FileLoader:
    def __init__(self, datasource:dict) -> pl.LazyFrame:
        self.datasource = datasource

    def load_csv(self, location:str, name:str):
        df = pl.scan_csv("{}{}".format(location, name))
        return df

    def load_sql(self, query:str, conn_uri:str):
        df = pl.read_sql(query, conn_uri).lazy()
        return df

    def load_api(self, url:str, params:dict, headers:dict, key:str):
        req = requests.get(url, params=params, headers=headers)

        data = req.json()[key]

        df = pl.read_json(data).lazy()
        return df

    def load_stage(self):
        filetype = self.datasource['type']
        if filetype == 'csv':
            data = self.load_csv(self.datasource['location'], self.datasource['name'])
        
        return data

