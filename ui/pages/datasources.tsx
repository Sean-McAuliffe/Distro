import Layout from "@/components/layout";




function DataSources() {


    return ( 
        <div className="w-full flex flex-col  gap-1 p-2 ">

        </div>
    )
}

DataSources.getLayout = (page: any) => {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }


export default DataSources; 