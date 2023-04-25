import React from "react";
import './ChartMenuBar.css';
import BarChart from '../Charts/BarChart';
import DoughnutChart from '../Charts/DoughnutChart';


function ChartMenuBar({standings}) {

    return (
        <div className="chart-menu-bar">
            <BarChart />
            <DoughnutChart standings={standings}/>
        </div>
    );
}

export default ChartMenuBar;