import Layout from "@/components/layout";
import { themeChange } from 'theme-change';
import { useEffect } from "react";
import * as Nano from 'nano';
import StatCard from "@/components/statCard";
import ReportTable from "@/components/reportTable";

type Report = {
  reportID:string,
  createdOn:string,
  sources:Array<string>,
  lastRun:string
}

type HomeProps = {
  "active": {
    "count": number,
    "lastUpdated": string
  },
  "issues": {
    "count": number, 
    "lastUpdated": string
  },
  "today": {
    "completion": string
    "nextReport": string
  },
  "reportData": Array<Report>
  
}


function Home(props:HomeProps) {

  useEffect(() => {
    themeChange(false);
  }, []);


  return (
    <div className="w-full flex-col gap-2 p-2 gap-y-3">
      <div className=" w-full flex gap-2">
        <StatCard title={'Active Reports'} stat={props.active.count} updateDesc={props.active.lastUpdated}/>
        <StatCard title={'Issues'} stat={props.issues.count} updateDesc={props.issues.lastUpdated}/>
        <StatCard title={"Today's Reports"} stat={props.today.completion} updateDesc={props.today.nextReport}/>
      </div>
      <div className="w-full flex gap-2 mt-2">
        <div className="p-3 w-full h-[45rem] bg-base-100 shadow rounded-lg ">
          <div className=" p-3 stat-title w-full">
            Reports
          </div>
          <ReportTable data={props.reportData}/>
        </div>

      </div>
    </div>
  );
}


Home.getLayout = (page: any) => {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Home;

export async function getServerSideProps(context:any){
  return {
    props: {
      "active": {
        "count": 25,
        "lastUpdated": "2/21/2023"
      },
      "issues": {
        "count": 2, 
        "lastUpdated": "2/22/2023"
      },
      "today": {
        "completion": "80%",
        "nextReport": "Next: Today @ 2:20pm EST"
      },
      "reportData": [
        { reportID: "Example Report V1", createdOn: "2/12/2023", sources: ["excel", "api", "sql", "excel"], lastRun: "2/22/2023" },
        { reportID: "Example Report V2", createdOn: "2/10/2023", sources: ["sql"], lastRun: "2/22/2023" }
      ]
      
  }
}
}