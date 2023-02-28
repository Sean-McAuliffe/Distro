


const BasicInfoWidget = () => {
    return (
        <div className="w-full h-full p-2 flex flex-col gap-3 card">
            <div className="card-title w-full">
                Basic Info
            </div>
            <div className="card-body">
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Report Name</span>
                </label>
                <label className="input-group">
                    <input type="text" placeholder="My Example Report" className="input input-bordered" />
                </label>
            </div>
            <div className="form-control">
            <label className="label">
                    <span className="label-text">Report Category</span>
                </label>
                <div className="input-group">
                    <select className="select select-bordered">
                        <option disabled selected>Pick category</option>
                        <option>Cat 1</option>
                        <option>Cat 2</option>
                    </select>
                </div>
            </div>
            </div>
        </div>
    )
}




export default BasicInfoWidget;