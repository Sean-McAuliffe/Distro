import Layout from "@/components/layout";
import { themeChange } from 'theme-change';
import { useEffect } from "react";
import * as Nano from 'nano';
import StatCard from "@/components/statCard";
import ReportTable from "@/components/reportTable";

type Report = {
  reportID:string,
  createdOn:string,
  sources:string,
  lastRun:string
}

const data:Array<Report> = [
  { reportID: "Example Report V1", createdOn: "2/12/2023", sources: "excel", lastRun: "2/22/2023" },
  { reportID: "Example Report V2", createdOn: "2/10/2023", sources: "sql", lastRun: "2/22/2023" }
]

console.log(typeof data)
function Home() {

  useEffect(() => {
    themeChange(false);
  }, []);


  return (
    <div className="w-full flex-col gap-2 p-2 gap-y-3">
      <div className=" w-full flex gap-2">
        <StatCard title={'Active Reports'} stat={250} updateDesc={"Last Updated: 2/21/2023"}/>
        <StatCard title={'Issues'} stat={2} updateDesc={"Last Updated: 2/21/2023"}/>
        <StatCard title={"Today's Reports"} stat={"80%"} updateDesc={"Next: Today @ 2:30pm EST"}/>
      </div>
      <div className="w-full flex gap-2 mt-2">
        <div className="p-3 w-full h-[45rem] bg-base-100 shadow rounded-lg ">
          <div className=" p-3 stat-title w-full">
            Reports
          </div>
          <ReportTable data={data}/>
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