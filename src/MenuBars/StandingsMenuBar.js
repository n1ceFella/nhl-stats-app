import React from "react";
import './StandingsMenuBar.css';
import StandingsTable from '../Components/StandingsTable';
import ChartMenuBar from '../MenuBars/ChartMenuBar';


function StandingsMenuBar({standings, teams}) {
    return (
        <div className="standings-menu-bar">
            <StandingsTable teams={teams}/>
            <ChartMenuBar standings={standings} teams={teams}/>
        </div>
    );
  }

export default StandingsMenuBar;