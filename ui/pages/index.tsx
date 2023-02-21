import Layout from "@/components/layout";
import { themeChange } from 'theme-change';
import { useEffect } from "react";
import * as Nano from 'nano';

import Link from "next/link";
import { useRouter } from "next/router";
import StatCard from "@/components/statCard";

function Home() {
  const router = useRouter();
  const ROUTE_POST_ID = "reports/[report]";

  let num_reports = 0
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
          <div className="table w-full ">
            <table className="table w-full">
              <thead>
                <tr >
                  <td>
                    Report ID
                  </td>
                  <td>
                    Created On
                  </td>
                  <td>
                    Data Sources
                  </td>
                  <td>
                    Last Run
                  </td>
                  <td>
                    
                  </td>
                </tr>
              </thead>
            </table>
          </div>
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