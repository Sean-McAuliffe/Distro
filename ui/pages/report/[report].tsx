import Layout from "@/components/layout";
import { useRouter } from "next/router";
import test from '../../mocks/report.json'
import { useEffect } from "react";
import { themeChange } from 'theme-change';

function Home() {
    useEffect(() => {
        themeChange(false);
      }, []);
    
    const router = useRouter();
    const id = router.query.report as string
    return (
        <div className="w-full flex-col gap-2 p-3">
            <div className=" card bg-base-100 shadow p-3 w-full h-96">
                <div className="card-body">
                    <h2 className="card-title font-bold">{id}</h2>
                    <h3 className="card-title font-light">{test.name}</h3>

                </div>
            </div>

        </div>
    )
}








Home.getLayout = (page: any) => {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }
  
  export default Home;