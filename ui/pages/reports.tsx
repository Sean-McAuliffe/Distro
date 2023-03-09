import Layout from "@/components/layout";




function AllReports() {


    return ( 
        <div className="w-full flex flex-col  gap-1 p-2 ">

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