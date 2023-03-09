import Layout from "@/components/layout";
import { useState } from "react";
import BasicInfoWidget from "@/components/create_report_steps/basic_info";
import DataSourceWidget from "@/components/create_report_steps/data_sources";
import PrepWidget from "@/components/create_report_steps/prep";
import AnalysisWidget from "@/components/create_report_steps/analysis";
import ExportWidget from "@/components/create_report_steps/export";



import type { RootState } from "@/store/store";
import {  useSelector,useDispatch } from 'react-redux'



type DataSource = {
  value: string,
  label: string
}

type CreateReportProps = {
  datasources: Array<DataSource>
}

function CreateReport(props: CreateReportProps) {

  const reportObj = useSelector((state:RootState) => state.createReport)

  const [activeStep, setActiveStep] = useState(0)


  const setStep = (index: number) => {
    setActiveStep(index)
  }

  const setStepCSS = (step: number) => {
    if (activeStep >= step) {
      return "cursor-pointer step step-accent"
    }
    else {
      return "cursor-pointer step"
    }
  }



  const displayWidget = () => {
    switch (activeStep) {
      case (0): {
        return <BasicInfoWidget />
      }
      case (1): {
        return <DataSourceWidget  data={props.datasources} />
      }
      case (2): {
        
        return <PrepWidget />
      }
      case (3): {
        return <AnalysisWidget />
      }
      case (4): {
        return <ExportWidget/>
      }
    }
  }


  const handleNext =() => {
    if(activeStep < 4){
      let newStep = activeStep +1
      setActiveStep(newStep)
    }
    else {
      return
    }
  }

  const handlePrev =() => {
    if(activeStep > 0 ){
      let newStep = activeStep - 1
      setActiveStep(newStep)
    }
    else {
      return
    }
  }


  return (

    <div className="w-full flex flex-col  gap-1 p-2 ">
      <div className="w-full h-full bg-base-100 rounded-lg p-3 items-center justify-center flex">
         <div className="w-3/4 ">
         <ul className="steps ">
            <li onClick={() => setStep(0)} className={setStepCSS(0)}>Basic Info</li>
            <li onClick={() => setStep(1)} className={setStepCSS(1)}>Data Sources</li>
            <li onClick={() => setStep(2)} className={setStepCSS(2)}>Prep</li>
            <li onClick={() => setStep(3)} className={setStepCSS(3)}>Analysis</li>
            <li onClick={() => setStep(4)} className={setStepCSS(4)}>Export</li>
          </ul>
         </div>
          <div className="w-1/4 flex gap-1">
              <div className="w-1/3">
                <button onClick={() => handlePrev()} className="btn btn-accent btn-md">
                  Prev
                </button>
              </div>
              <div className="w-1/3">
                <button onClick={()=> handleNext()} className="btn btn-accent btn-md">
                  Next
                </button>
              </div>
              <div className="divider divider-horizontal"></div>
              <div className="w-1/3">
                <button onClick={() => alert(reportObj)} className="btn btn-info btn-md">
                  Save
                </button>
              </div>
          </div>
      </div>
      <div className="w-full h-full bg-base-100 rounded-lg p-2 flex">
        {displayWidget()}
      </div>
    </div>

  )
}

CreateReport.getLayout = (page: any) => {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default CreateReport;



export async function getServerSideProps(context: any) {
  return {
    props: {
      "datasources": [
        {
          value: 'Example Excel',
          label: 'Example Excel',
        },
        {
          value: 'Example SQL',
          label: 'Example SQL'
        },
        {
          value: 'Example API',
          label: 'Example API'
        },
        {
          value: 'Example CSV',
          label: 'Example CSV'
        }
      ]
    }
  }
}