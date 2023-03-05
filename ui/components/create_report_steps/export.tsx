import { useSelector, useDispatch } from 'react-redux'
import { RootState } from "@/store/store";

import { editExportName, editExportFiletype } from '@/store/reducers/createReportReducer';



const ExportWidget =() => {

    const dispatch = useDispatch()

    return (
        <div className="w-full h-full p-2 flex flex-col gap-3 card">
        <div className="card-title w-full">
            Export
        </div>
        <div className="card-body">
            <div className="w-full flex gap-2">
            <div className="form-control w-1/3">
                <label className="label">
                    <span className="label-text">File Name</span>
                </label>
                <label className="input-group">
                    <input onChange={(e) => dispatch(editExportName(e.target.value))} type="text" placeholder="My Example Report" className="input input-bordered" />
                </label>
            </div>
            <div className="form-control w-1/3">
            <label className="label">
                    <span className="label-text">File Type</span>
                </label>
                <div className="input-group">
                    <select onChange={(e) => dispatch(editExportFiletype(e.target.value))} className="select select-bordered">
                        <option disabled selected>Pick a type</option>
                        <option>Excel</option>
                        <option>CSV</option>
                    </select>
                </div>
            </div>
            </div>
            <br></br>

        </div>
    </div>
    )
}


export default ExportWidget;