import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from "@/store/store";
import { addAnalysis } from "@/store/reducers/createReportReducer";


const stepTypes = ['Group By']

const example_sources = [
    { value: "Example Excel", label: "Example Excel" },
    { value: "Example SQL", label: "Example SQL" },]

const example_aggs = [
    { value: "count", label: "count" },
    { value: "sum", label: "sum" }
]

const AnalysisWidget = () => {
    const dispatch = useDispatch();
    const steps = useSelector((state:RootState) => state.createReport.analysis)

    const [rows, setRows] = useState(steps)

    useEffect(() => {
        dispatch(addAnalysis(rows))
    }, [rows])


    const handleStepName = (e:any, id: number) => {
        const currentRow = rows.findIndex((row:any) => row.id == id);
        const updatedRow = { ...rows[currentRow], step_name: e.target.value };
        const newRows = [
            ...rows.slice(0, currentRow),
            updatedRow,
            ...rows.slice(currentRow + 1)
        ];
        setRows(newRows)
    }


    const handleStepType = (e:any, id: number) => {
        const currentRow = rows.findIndex((row:any) => row.id == id);
        const updatedRow = { ...rows[currentRow], type: e.target.value };
        const newRows = [
            ...rows.slice(0, currentRow),
            updatedRow,
            ...rows.slice(currentRow + 1)
        ];
        setRows(newRows)
    }

    const handleStepDataSource = (e:any, id: number) => {
        const currentRow = rows.findIndex((row:any) => row.id == id);
        const updatedRow = { ...rows[currentRow], datasource: e.target.value };
        const newRows = [
            ...rows.slice(0, currentRow),
            updatedRow,
            ...rows.slice(currentRow + 1)
        ];
        setRows(newRows)
    }

    const handleStepColumn = (e:any, id: number) => {
        const currentRow = rows.findIndex((row:any) => row.id == id);
        const updatedRow = { ...rows[currentRow], column: e.target.value };
        const newRows = [
            ...rows.slice(0, currentRow),
            updatedRow,
            ...rows.slice(currentRow + 1)
        ];
        setRows(newRows)
    }

    const handleStepAgg = (e:any, id: number) => {
        const currentRow = rows.findIndex((row:any) => row.id == id);
        const updatedRow = { ...rows[currentRow], agg: e.target.value };
        const newRows = [
            ...rows.slice(0, currentRow),
            updatedRow,
            ...rows.slice(currentRow + 1)
        ];
        setRows(newRows)
    }

    const addnewRow = () => {
        if (rows.length > 0) {
            let currentMax = rows.reduce((a:any, b:any) => a.id > b.id ? a : b).id;
            let newMax = currentMax + 1
            const newRows = [...rows, { id: newMax }]
            setRows(newRows)
        }
        else {
            setRows([{ id: 0 }])
        }
    }

    const removeRow = (id: number) => {
        let newRows = rows.filter((row:any) => row.id !== id)
        setRows(newRows);
    }



    return (
        <div className="w-full h-full p-2 flex flex-col gap-3 card">
            <div className="card-title w-full">
                Analysis
            </div>
            <div className="card-body">
                {rows.map((row) => {
                    return (
                        <>
                            <div key={row.id} className="w-full flex gap-2">
                                <div className="form-control w-1/5 max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Step Name</span>
                                    </label>
                                    <input onChange={(e) => handleStepName(e, row.id)} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                                </div>

                                <div className="form-control w-1/6 max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Step Type</span>
                                    </label>
                                    <select onChange={(e) => handleStepType(e, row.id)} className="select select-bordered">
                                        <option disabled selected>Pick one</option>
                                        {stepTypes.map((t) => {
                                            return (<option value={t}>{t}</option>)
                                        })}
                                    </select>


                                </div>
                                <div className="divider divider-horizontal"></div>
                                <div className="form-control w-1/5 ">
                                    <label className="label">
                                        <span className="label-text">Data Source</span>
                                    </label>
                                    <select onChange={(e) => handleStepDataSource(e, row.id)} className="select select-bordered">
                                        <option disabled selected>Pick one</option>
                                        {example_sources.map((t) => {
                                            return (<option value={t.value}>{t.label}</option>)
                                        })}
                                    </select>
                                </div>

                                <div className="form-control w-1/5 max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Column</span>
                                    </label>
                                    <input onChange={(e) => handleStepColumn(e, row.id)} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                                </div>

                                <div className="form-control w-1/6 ">
                                    <label className="label">
                                        <span className="label-text">Aggregation</span>
                                    </label>
                                    <select onChange={(e) => handleStepAgg(e, row.id)} className="select select-bordered">
                                        <option disabled selected>Pick one</option>
                                        {example_aggs.map((t) => {
                                            return (<option value={t.value}>{t.label}</option>)
                                        })}
                                    </select>
                                </div>

                                <div className="w-1/12 form-control">
                                    <button onClick={() => removeRow(row.id)} className="btn btn-circle btn-xs btn-error text-base-100">
                                        X
                                    </button>
                                </div>

                            </div>
                            <div className="divider"></div>
                        </>
                    )
                })}

                <div className="w-1/4">
                    <button onClick={() => addnewRow()} className="btn  btn-accent ">
                        Add Row
                    </button>
                </div>
            </div>
        </div>
    )
}


export default AnalysisWidget;