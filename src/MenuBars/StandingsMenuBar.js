import React from "react";
import './StandingsMenuBar.css';
import StandingsTable from '../Components/StandingsTable';
import ChartMenuBar from '../MenuBars/ChartMenuBar';


function StandingsMenuBar() {
    return (
        <div className="standings-menu-bar">
            <StandingsTable />
            <ChartMenuBar />
        </div>
    );
  }

export default StandingsMenuBar;