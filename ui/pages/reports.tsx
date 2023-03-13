import Layout from "@/components/layout";
import { themeChange } from 'theme-change';
import { useEffect, useState } from "react";
import AllReportsTable from '@/components/allReportsTable'

type Report = {
  reportID: string,
  createdOn: string,
  sources: Array<string>,
  lastRun: string
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


function AllReports(props: HomeProps) {

  useEffect(() => {
    themeChange(false);
  }, []);


  const [filtered, setFiltered] = useState(props.reportData)

  const handleSearch = (e) => {
    let value = e.target.value.toLowerCase();
    if (value !== "") {
      let found = props.reportData.filter((report) => report.reportID.toLowerCase().includes(value))
      setFiltered(found)
    }
    else {
      setFiltered(props.reportData)
    }
  }

  return (
    <div className="w-full flex flex-col  gap-1 p-2 ">
      <div className="p-3 w-full h-[45rem] bg-base-100 shadow rounded-lg ">
        <div className="p-3 stat-title w-full flex">
          <div className="w-1/4">
            Reports
          </div>
          <div className="w-3/4 flex flex-col">
            <div className="form-control w-full max-w-xs">
              <input onChange={(e) => handleSearch(e)} type="text" placeholder="Report Name" className="input input-bordered w-full max-w-xs" />
            </div>
          </div>
        </div>
        <AllReportsTable data={filtered} />
      </div>
    </div>
  )
}

AllReports.getLayout = (page: any) => {
  return (
    <Layout>
      {page}
    </Layout>
  )
}


export default AllReports;


export async function getServerSideProps(context: any) {
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