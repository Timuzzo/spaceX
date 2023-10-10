import { useEffect, useState } from "react";
import './Launch.css'
import SearchBar from "./SearchBar";
import Filter from "./Filter";

export default function Launch () {
    const [launchData, setLaunchData] = useState([])
    const [searchData, setSearchData] = useState([])

    const getData = async () => {
        const res = await fetch("https://api.spacexdata.com/v5/launches")
        const data = await res.json();
        setLaunchData(data)
        setSearchData(data)
    }
    
    useEffect(()=> {
        getData()
    }, [])
    
    return (
        <>
        <h1 id="heading">SpaceX launches ({searchData.length})</h1>
        <SearchBar launchData={launchData} setSearchData={setSearchData}/>
        <Filter launchData={launchData} setSearchData={setSearchData}/>
        <div className="table">
        {searchData?.length ? 
        searchData.map((launch)=>(
            <div className="card" key={launch.id}>
                <div className="number_status">
                    <p id="number">
                    {launch.flight_number}
                    </p>
                    <div className="status">
                        {launch.success === true || launch.success === null ? 
                        <>
                        <p>Success</p>
                        <svg id="rocket_success" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/></svg>
                        </>
                        :
                        <>
                        <p>Failure</p>
                        <svg id="rocket_faulure" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/></svg>
                        </>
                        }
                    </div>
                </div>
                <div className="date_time">
                <p>
                {new Date(launch.date_utc).toLocaleDateString()}
                </p>
                <p>
                {new Date(launch.date_utc).toLocaleTimeString()}
                </p>
                </div>
                <p id="name">
                {launch.name}
                </p>
                <p id="details">
                {launch.details ? launch.details : "No details"}
                </p> 
            </div>
        ))
        :
        <div className="no_results">
            <svg id="no_results_svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/></svg>
            <p className="no_results_text">No results</p>  
        </div>
        }
        </div>
        </>
    )}