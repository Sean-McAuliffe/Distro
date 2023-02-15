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
    meta = {}
    print("INFO:: beginning pipeline")
    meta['startTime'] = datetime.now()

    try:
        df = FileLoader(obj['datasource'])
        df = df.load_stage()
        meta['loadTime'] = datetime.now()
    except Exception as e:
        meta['loadError_time'] = datetime.now()
        meta['loadError_message'] = str(e)

    try:
        prep = Prep_Handler(df, obj['tasks']['prep'])
        df = prep.prep_stage(df)
        meta['prepTime'] = datetime.now()
    except Exception as e:
        meta['prepError_time'] = datetime.now()
        meta['prepError_message'] = str(e)

    try:  
        analysis = Analysis_Handler(df, obj['tasks']['analysis'])
        df = analysis.analysis_stage(df)
        meta['analysisTime'] = datetime.now()
    except Exception as e:
        meta['analysisError_time'] = datetime.now()
        meta['analysisError_message'] = str(e)

    #fetch for dev, collect(streaming=True) for prod
    try:
        data = df.fetch()
        meta['endTime'] = datetime.now()
    except Exception as e:
        meta['endTime'] = datetime.now()
        meta['endTime_message'] = str(e)

    if obj['logging']['enable'] == 'true':
        ## logic here to send the logging data via http call
        pass
    else:
        del meta
        pass

    return {"status":"OK",
            "statusCode": 200,
            "statusDate": str(datetime.now())
            "data":data.write_json()}

    