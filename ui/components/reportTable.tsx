import Link from "next/link";
import { useRouter } from "next/router";

type Report = {
  reportID:string,
  createdOn:string,
  sources:string,
  lastRun:string
}

interface ReportProps {
  data: Report[]
}

const ReportTable = ({data}:ReportProps) => {

  const router = useRouter();
  const ROUTE_POST_ID = "report/[report]";

  const formatBadge=(name:string)=>{
    if(name.toLowerCase().includes('excel')){
      return "badge badge-accent cursor-pointer"
    }
    if(name.toLowerCase().includes('sql')){
      return "badge badge-secondary cursor-pointer"
    }
  }

    return (
<div className="w-full ">
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
              <tbody>
              {data.map((row:Report) => {
                  return (
                    <tr>
                  <td>
                    {row.reportID}
                  </td>
                  <td>
                    {row.createdOn}
                  </td>
                  <td>
                    <span className={formatBadge(row.sources)}>{row.sources}</span>
                  </td>
                  <td>
                    {row.lastRun}
                  </td>
                  <td>
                    <Link className="btn btn-ghost cursor-pointer " key={`test`} href={{ pathname: ROUTE_POST_ID, query: { report: row.reportID } }}>Details</Link>
                  </td>
                </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
    )
    
}


export default ReportTable;