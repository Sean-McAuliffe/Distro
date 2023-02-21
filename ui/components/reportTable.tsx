



const reportTable =() => {
    return (
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
    )
}


export default reportTable;