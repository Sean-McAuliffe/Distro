import { MultiSelect } from "react-multi-select-component";
import { useState, useEffect } from "react";
import {  useSelector,useDispatch } from 'react-redux'
import { addDataSource } from "@/store/reducers/createReportReducer";
import type { RootState } from "@/store/store";


type ReactSelectOption = {
    value: string;
    label: string;
}

type Func = Function;

interface CreateReportProps {
    data: ReactSelectOption[],
}



const DataSourceWidget = ({ data }: CreateReportProps) => {
    const dispatch = useDispatch()
    const options = useSelector((state:RootState) => state.createReport.datasources)

    const [selected, setSelected] = useState(options.map((opt) => {
        let i = {
            value: opt,
            label: opt
        }
        return i
    }))

    useEffect(() => {
  
        let ids = selected.map((item:ReactSelectOption) => item.value);
        if(ids.length == 0){
            return
        }
        else{
            dispatch(addDataSource(ids))
            
        }
    },[selected])

    return (
        <div className="w-full h-full p-2 flex flex-col gap-3 card">
            <div className="card-title w-full">
                Data Sources
            </div>
            <div className="card-body">
                <div className="input w-full">
                    <MultiSelect
                        options={data}
                        value={selected}
                        onChange={setSelected}
                        labelledBy="Select"
                    />
            
                </div>
            </div>
        </div>
    )
}


export default DataSourceWidget;

