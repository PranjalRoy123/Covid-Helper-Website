import React from 'react'

export default function PieChart(props) {

    const total = props.deaths + props.recoveries + props.active_cases
    const deaths = props.deaths / total
    const active_cases = props.active_cases / total
    const recoveries = props.recoveries / total

    const style = {
        borderRadius: "50%",
        width: "500px",
        height: "500px",
        background: `conic-gradient(red ${deaths}turn, blue ${deaths}turn ${active_cases}turn, green ${active_cases}turn ${recoveries}turn)`
    }

    return (
        <div className="chart">
            <div>Cases Pie Chart</div>
            <div>
                <span>Deaths - </span>
                <span style={{color: "red"}}>Red</span>
            </div>
            <div>
                <span>Active Cases - </span>
                <span style={{color: "blue"}}>Blue</span>
            </div>
            <div>
                <span>Recovered - </span>
                <span style={{color: "green"}}>Green</span>
            </div>
            <div style={style}></div>
        </div>
    )
}
