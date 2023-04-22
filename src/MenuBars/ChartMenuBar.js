import React from "react";
import './ChartMenuBar.css';


function ChartMenuBar(props) {
    return (
        <div className="chart-menu-bar">
            {props.children}
        </div>
    );
}

export default ChartMenuBar;