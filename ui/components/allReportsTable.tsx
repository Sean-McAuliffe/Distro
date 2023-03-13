import Link from "next/link";
import { useRouter } from "next/router";

type Report = {
  reportID:string,
  createdOn:string,
  sources:Array<string>,
  lastRun:string
}

interface ReportProps {
  data: Report[]
}

const AllReportsTable = ({data}:ReportProps) => {

  const router = useRouter();
  const ROUTE_POST_ID = "report/[report]";

  const formatBadge=(name:string)=>{
    if(name.toLowerCase().includes('excel')){
      return "badge badge-accent cursor-pointer"
    }
    if(name.toLowerCase().includes('sql')){
      return "badge badge-secondary cursor-pointer"
    }
    if(name.toLowerCase().includes('api')){
      return "badge badge-info cursor-pointer"
    }
  }

  const makeBadges=(sources:Array<string>)=>{
    let badges:any = []
    let length = sources.length
    if(length > 3){
      sources.slice(0, 2).map((item) => {
        badges.push(<span className={formatBadge(item)}>{item}</span>)
      })

      badges.push(<span className="text-sm ml-1">{`...and ${sources.slice(2).length} more`}</span>)
    }
    else {
      sources.map((item) => {
        badges.push(<span className={formatBadge(item)}>{item}</span>)
      })
    }

    return badges
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
                  {makeBadges(row.sources)}
                  </td>
                  <td>
                    {row.lastRun}
                  </td>
                  <td>
                    <Link className="btn btn-ghost  " key={row.reportID} href={{ pathname: ROUTE_POST_ID, query: { report: row.reportID } }}>Details</Link>
                  </td>
                </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
    )
    
}


export default AllReportsTable;