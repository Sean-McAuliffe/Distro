import { MultiSelect } from "react-multi-select-component";
import { useState } from "react";



type ReactSelectOption = {
    value: string;
    label: string;
}

type Func = Function;

interface CreateReportProps {
    data: ReactSelectOption[],
    func: Func,
    selected: React.ComponentState
}


const DataSourceWidget = ({ data, func,selected  }: CreateReportProps) => {



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
                        onChange={func}
                        labelledBy="Select"
                    />
                </div>
            </div>
        </div>
    )
}


export default DataSourceWidget;

