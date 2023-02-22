import Layout from "@/components/layout";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

function CreateReport() {

  const openCSS = " card-content w-full h-[fit-content] transition ease-in-out delay-150 "
  const closedCSS = " transition ease-in-out delay-150 hidden"

  const [basic, setBasic] = useState(false)



  return (

    <div className="w-full flex flex-col gap-1 p-2 ">

      <div className="w-full h-full bg-base-100 rounded-lg p-3 items-center justify-center">
        <div className="mx-auto ">
          <ul className="steps">
            <li className="step step-accent">Basic Info</li>
            <li className="step">Data Sources</li>
            <li className="step">Prep</li>
            <li className="step">Analysis</li>
            <li className="step">Export</li>
          </ul>
        </div>
      </div>

      <div className="w-full h-[fit-content] bg-base-100 rounded-lg p-3 items-center justify-center">
        <div className="card p-2 flex">
          <div onClick={() => setBasic(!basic)} className="select-none cursor-pointer w-full card-title text-lg text-base-content">
            <div className="w-5/6">Basic Info</div>
            <div className="w-1/6 text-right">
              {basic == true ? <ChevronUpIcon className="w-8 h-8" /> : <ChevronDownIcon className="w-8 h-8" />}
            </div>
          </div>
          <div className={basic == true ? openCSS : closedCSS}>
            <div className="form-control gap-2">
              <label className="label">
                <span className="label-text">Report Name</span>
              </label>
              <label className="input-group input-group-md">
                <span>Name</span>
                <input type="text" placeholder="info@site.com" className="input input-bordered" required={true} />
              </label>
              <label className="label">
                <span className="label-text">Report Category</span>
              </label>
              <label className="input-group input-group-md">
                <select required={true} className="select select-bordered">
                  <option disabled selected>Pick category</option>
                  <option>Category One</option>
                  <option>Category Two</option>
                  <option>Category Three</option>       
                  <option>Category Four</option>                             
                </select>
              </label>
            </div>


          </div>
        </div>
      </div>


    </div>

  )
}

CreateReport.getLayout = (page: any) => {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default CreateReport;


