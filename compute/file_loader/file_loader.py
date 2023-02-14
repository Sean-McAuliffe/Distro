import polars as pl


class FileLoader:
    def __init__(self, datasource:dict) -> pl.LazyFrame:
        self.datasource = datasource

    def load_csv(self, location:str, name:str):
        df = pl.scan_csv("{}{}".format(location, name))
        return df

    def load_sql(self, query:str, conn_uri:str):
        df = pl.read_sql(query, conn_uri).lazy()
        return df


    def load_stage(self):
        filetype = self.datasource['type']
        if filetype == 'csv':
            data = self.load_csv(self.datasource['location'], self.datasource['name'])

        return data

