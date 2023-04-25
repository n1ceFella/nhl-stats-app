import React from "react";
import './ChartMenuBar.css';
import BarChart from '../Charts/BarChart';
import DoughnutChart from '../Charts/DoughnutChart';


function ChartMenuBar({standings, teams}) {
    return (
        <div className="chart-menu-bar">
            <BarChart standings={standings}/>
            <DoughnutChart teams={teams}/>
        </div>
    );
}

export default ChartMenuBar;