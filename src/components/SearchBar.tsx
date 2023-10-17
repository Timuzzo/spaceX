import './SearchBar.css'
import { Launch } from "../types/launch"

interface SearchBarProps {
    launchData: Launch[];
    setSearchData: React.Dispatch<React.SetStateAction<Launch[]>>;
}

export default function SearchBar ({launchData, setSearchData}: SearchBarProps):React.JSX.Element {
    const handleSubmit = (e: React.SyntheticEvent): void => e.preventDefault()

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.value) return setSearchData(launchData)
        const resultsArray = launchData.filter((launch: Launch) => launch.name?.includes(e.target.value) || launch.details?.includes(e.target.value) || launch.date_utc?.includes(e.target.value))
        setSearchData(resultsArray)
    }
    
    return (
    <header>
        <p id='search_heading'>Please search for a desired launch</p>
        <form className="search" onSubmit={handleSubmit}>
        <input className="search_input" type="text" id="search" onChange={handleSearchChange}/>
        </form>
    </header>
)
}