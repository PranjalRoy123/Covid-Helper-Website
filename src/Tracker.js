import React, {useState, useEffect} from 'react'
import PieChart from "./PieChart"

export default function Tracker() {

    const [data, changeData] = useState({cases: "TBD", deaths: "TBD", recoveries: "TBD", active_cases: "TBD"})

    useEffect(() => {
        fetch('https://corona.lmao.ninja/v2/all?yesterday')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            console.log(myJson);
            changeData({
                cases: myJson.cases,
                deaths : myJson.deaths,
                recoveries : myJson.recovered,
                active_cases: myJson.active
            })
        })
        .catch(function (error) {
            console.log("Error: " + error);
        });
    }, [])

    return (
        <div className="Tracker">
            <div className="header">COVID-19</div>
            <div>
                <div className="label">Total cases </div>
                <div className="data cases">{data.cases}</div>
            </div>
            <div>
                <div className="label"> Total deaths </div>
                <div className="data deaths">{data.deaths}</div>
            </div>
            <div>
                <div className="label">Total active cases </div>
                <div className="data active">{data.active_cases}</div>
            </div>
            <div>
                <div className="label">Total recoveries </div>
                <div className="data recovered">{data.recoveries}</div>
            </div>
            <PieChart deaths={data.deaths} recoveries={data.recoveries} active_cases={data.active_cases}/>
        </div>
    )
}
