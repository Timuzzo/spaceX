import "./Filter.css"
import { Launch } from "../types/launch"

interface FilterProps {
    launchData: Launch[];
    setSearchData: React.Dispatch<React.SetStateAction<Launch[]>>;
}

export default function Filter({launchData, setSearchData}:FilterProps):React.JSX.Element  {

const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault()
}

const handleChangeTime = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!e.target.value) 
    return setSearchData(launchData) 
    else if (e.target.value === "past") {
    const resultsArray = launchData.filter((launch: Launch) => launch.date_utc < Date())
    setSearchData(resultsArray)
    } 
    else if (e.target.value === "future") {
    const resultsArray = launchData.filter((launch: Launch) => launch.date_utc > Date())
    setSearchData(resultsArray)
    }
}

const handleChangeStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!e.target.value) 
    return setSearchData(launchData) 
    else if (e.target.value === "success") {
    const resultsArray = launchData.filter((launch: Launch) => launch.success === null || launch.success === true)
    setSearchData(resultsArray)
    } 
    else if (e.target.value === "failure") {
    const resultsArray = launchData.filter((launch: Launch) => launch.success === false)
    setSearchData(resultsArray)
    }
}

return (
    <div className="filter">
        <form onSubmit={handleSubmit}>
            <p className="filter_heading">Please filter past or future launches</p>
            <select name="time" className="filter_select" onChange={handleChangeTime}>
                <option style={{display: "none"}}></option>
                <option value="past">Past</option>
                <option value="future">Future</option>
            </select>
        </form>
        <form onSubmit={handleSubmit}>
            <p className="filter_heading">Please filter successful or failed launches</p>
            <select name="status" className="filter_select" onChange={handleChangeStatus}>
                <option style={{display: "none"}}></option>
                <option value="success">Success</option>
                <option value="failure">Failure</option>
            </select>
        </form>
    </div>
)
}