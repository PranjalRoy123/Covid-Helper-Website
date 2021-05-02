import React from 'react'
import Tracker from "./Tracker"

export default function App() {
    return (
        <div className="App">
            <div className="header">COVID TRACKER</div>
            <div className="info">Bringing you the latest worldwide Covid - 19 data and its visualization 📈.</div>
            <Tracker/>
        </div>
    )
}
