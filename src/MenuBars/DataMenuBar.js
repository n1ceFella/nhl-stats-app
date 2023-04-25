import React from "react";
import './DataMenuBar.css';
import DataBar from '../MenuBars/DataBar';


function DataMenuBar({teams}) {
    return (
        <div className="data-menu-bar">
            <DataBar teams={teams}/>
        </div>
    );
  }

export default DataMenuBar;