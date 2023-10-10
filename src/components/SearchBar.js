import './SearchBar.css'

export default function SearchBar ({launchData, setSearchData}) {
    const handleSubmit = (e) => e.preventDefault()

    const handleSearchChange = (e) => {
        if (!e.target.value) return setSearchData(launchData)
        const resultsArray = launchData.filter(launch => launch.name?.includes(e.target.value) || launch.details?.includes(e.target.value) || launch.date_utc?.includes(e.target.value))
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