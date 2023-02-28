import { useState } from "react";




const PrepWidget = () => {

    const [rows, setRows] = useState([{ id: 0 }])

    const stepTypes = [
        'Filter'
    ]

    const operators = [
        { value: "=", label: "Equals" },
        { value: "!=", label: "Does not equal" },
        { value: ">", label: "Greater Than" },
        { value: "<", label: "Less Than" },
        { value: ">=", label: "At Least" },
        { value: "<=", label: "At Most" },
        { value: "contains", label: "Includes" },
        { value: "!contains", label: "Does not Include" }

    ]

    const example_sources = [
            { value: "Example Excel", label: "Example Excel" },
            { value: "Example SQL", label: "Example SQL" },]

    const handleStepName = (e, id: number) => {
        const currentRow = rows.findIndex((row) => row.id == id);
        const updatedRow = { ...rows[currentRow], step_name: e.target.value };
        const newRows = [
            ...rows.slice(0, currentRow),
            updatedRow,
            ...rows.slice(currentRow + 1)
        ];
        setRows(newRows)
    }

    const handleStepType = (e, id: number) => {
        const currentRow = rows.findIndex((row) => row.id == id);
        const updatedRow = { ...rows[currentRow], type: e.target.value };
        const newRows = [
            ...rows.slice(0, currentRow),
            updatedRow,
            ...rows.slice(currentRow + 1)
        ];
        setRows(newRows)
    }

    const handleStepDataSource = (e, id: number) => {
        const currentRow = rows.findIndex((row) => row.id == id);
        const updatedRow = { ...rows[currentRow], datasource: e.target.value };
        const newRows = [
            ...rows.slice(0, currentRow),
            updatedRow,
            ...rows.slice(currentRow + 1)
        ];
        setRows(newRows)
    }

    const handleStepColumn = (e, id: number) => {
        const currentRow = rows.findIndex((row) => row.id == id);
        const updatedRow = { ...rows[currentRow],  };
        const newRows = [
            ...rows.slice(0, currentRow),
            updatedRow,
            ...rows.slice(currentRow + 1)
        ];
        setRows(newRows)
    }


    const handleStepOperator = (e, id: number) => {
        const currentRow = rows.findIndex((row) => row.id == id);
        const updatedRow = { ...rows[currentRow], operator: e.target.value };
        const newRows = [
            ...rows.slice(0, currentRow),
            updatedRow,
            ...rows.slice(currentRow + 1)
        ];
        setRows(newRows)
    }

    const handleStepValue = (e, id: number) => {
        const currentRow = rows.findIndex((row) => row.id == id);
        const updatedRow = { ...rows[currentRow], value: e.target.value };
        const newRows = [
            ...rows.slice(0, currentRow),
            updatedRow,
            ...rows.slice(currentRow + 1)
        ];
        setRows(newRows)
    }

    const addnewRow = () => {
        if(rows.length > 0){
            let currentMax = rows.reduce((a, b) => a.id > b.id ? a : b).id;
        let newMax = currentMax + 1
        const newRows = [...rows, { id: newMax }]
        setRows(newRows)
        }
        else {
            setRows([{ id: 0 }])
        }
    }

    const removeRow =(id:number) => {
        let newRows = rows.filter((row) => row.id !== id)
        setRows(newRows);
    }




    return (
        <div className="w-full h-full p-2 flex flex-col gap-3 card">
            <div className="card-title w-full">
                Data Prep
            </div>
            <div className="card-body">
                {
                    rows.map((row) => {
                        return (
                            <>
                                <div key={row.id} className="w-full flex gap-2">
                                    <div className="form-control w-1/5 max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Step Name</span>
                                        </label>
                                        <input onChange={(e) => handleStepName(e, row.id)} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                                    </div>
                                    <div className="form-control w-1/5 max-w-xs">
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
                                    <div className="form-control w-1/5 ">
                                        <label className="label">
                                            <span className="label-text">Operator</span>
                                        </label>
                                        <select onChange={(e) => handleStepOperator(e, row.id)} className="select select-bordered">
                                            <option disabled selected>Pick one</option>
                                            {operators.map((t) => {
                                                return (<option value={t.value}>{t.label}</option>)
                                            })}
                                        </select>
                                    </div>

                                    <div className="form-control w-1/5 max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Value</span>
                                        </label>
                                        <input onChange={(e) => handleStepValue(e, row.id)} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                                    </div>
                                    <div className="w-1/4 form-control">
                                        <button onClick={() => removeRow(row.id)} className="btn btn-circle btn-xs btn-error text-base-100">
                                            X
                                        </button>
                                    </div>
                                </div>
                                <div className="divider"></div>
                            </>

                        )
                    })
                }

                <div className="w-1/4">
                    <button onClick={() => addnewRow()} className="btn  btn-accent ">
                        Add Row
                    </button>
                </div>
            </div>
        </div>
    )
};


export default PrepWidget;