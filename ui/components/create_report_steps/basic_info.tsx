import { useSelector, useDispatch } from 'react-redux';
import {changeName, changeCategory} from '../../store/reducers/createReportReducer';


const BasicInfoWidget = () => {
    const dispatch = useDispatch()

    const handleNameChange=(e)=>{
        dispatch(changeName(e.target.value))
    }


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
                    <input onChange={(e) => handleNameChange(e)} type="text" placeholder="My Example Report" className="input input-bordered" />
                </label>
            </div>
            <div className="form-control">
            <label className="label">
                    <span className="label-text">Report Category</span>
                </label>
                <div className="input-group">
                    <select onChange={(e) => dispatch(changeCategory(e.target.value))} className="select select-bordered">
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