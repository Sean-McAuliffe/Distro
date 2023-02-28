import Layout from "@/components/layout";
import { useState } from "react";
import BasicInfoWidget from "@/components/create_report_steps/basic_info";
import DataSourceWidget from "@/components/create_report_steps/data_sources";
import PrepWidget from "@/components/create_report_steps/prep";
import AnalysisWidget from "@/components/create_report_steps/analysis";
import ExportWidget from "@/components/create_report_steps/export";



type DataSource = {
  value: string,
  label: string
}

type CreateReportProps = {
  datasources: Array<DataSource>
}

function CreateReport(props: CreateReportProps) {

  const [activeStep, setActiveStep] = useState(4)
  const [sources, setSources] = useState([]);


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
        return <DataSourceWidget selected={sources} func={setSources} data={props.datasources} />
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


  return (

    <div className="w-full flex flex-col  gap-1 p-2 ">

      <div className="w-full h-full bg-base-100 rounded-lg p-3 items-center justify-center">
    
          <ul className="steps ">
            <li onClick={() => setStep(0)} className={setStepCSS(0)}>Basic Info</li>
            <li onClick={() => setStep(1)} className={setStepCSS(1)}>Data Sources</li>
            <li onClick={() => setStep(2)} className={setStepCSS(2)}>Prep</li>
            <li onClick={() => setStep(3)} className={setStepCSS(3)}>Analysis</li>
            <li onClick={() => setStep(4)} className={setStepCSS(4)}>Export</li>
          </ul>
       
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