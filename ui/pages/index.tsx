import Layout from "@/components/layout";
import { themeChange } from 'theme-change';
import { useEffect } from "react";
import Nano from 'nano';

import Link from "next/link";
import { useRouter } from "next/router";







function Home() {
  const router = useRouter();
  const ROUTE_POST_ID = "reports/[report]";
  // let n = Nano("http://admin:password@localhost/couchdb:5984")

  // console.log(n)

  useEffect(() => {
    themeChange(false);
  }, []);


  return (
    <div className="w-full flex-col gap-2 p-2">
        <div className="overflow-x-auto w-full shadow-md">
          <table className="table w-full ">
            <thead>
              <tr>
                <th>Report Name</th>
                <th>Created Date</th>
                <th>Last Run</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="text-base font-bold">
                      Example Report
                  </div>
                </td>
                <td>
                  <div className="text-base">
                      2/12/2023
                  </div>
                </td>
                <td>
                <div className="text-success">
                      Success
                  </div>
                </td>
                <td>
                  <div className="btn btn-ghost normal-case text-sm ">
                  <Link className="w-full " key={`test`} href={{ pathname: ROUTE_POST_ID, query: { report: 'testReportV1' } }}>Details</Link>
                  </div>
                </td>
              </tr>
            </tbody>

          </table>

        </div>
        {/* {JSON.stringify(n.info())} */}
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