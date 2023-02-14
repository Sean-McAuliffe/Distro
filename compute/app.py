import json
import polars as pl
from fastapi import FastAPI
from datetime import datetime
from prep_handler.prep import Prep_Handler
from file_loader.file_loader import FileLoader
from analysis_handler.analysis import Analysis_Handler


"""
uvicorn app:app --port 5000
"""

app = FastAPI(title='Compute Test', description='this api is attached to the template-engine for compute', version="1.0")



def handle_export(df, export_obj):
    print("INFO:: beginning task - export")
    where = export_obj['where']
    location_type= where['location_type']
    location = where['vars']['location']
    name = where['vars']['name']
    filetype = export_obj['filetype']
    if location_type == 'local':
        if filetype == 'csv':
            df.write_csv("{}{}.csv".format(location, name), sep=",")
    print("INFO:: export complete")




@app.post('/report', tags=["store"])
async def pipeline(obj:dict=None):
    print("INFO:: beginning pipeline")
    
    df = FileLoader(obj['datasource'])
    df = df.load_stage()

    prep = Prep_Handler(df, obj['tasks']['prep'])
    df = prep.prep_stage(df)

    analysis = Analysis_Handler(df, obj['tasks']['analysis'])
    df = analysis.analysis_stage(df)

    #fetch for dev, collect(streaming=True) for prod
    data = df.fetch()

    return {data.write_json()}

    