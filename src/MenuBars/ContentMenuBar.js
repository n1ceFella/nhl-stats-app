import React from "react";
import './ContentMenuBar.css';
import TopMenuBar from './TopMenuBar';
import DataMenuBar from './DataMenuBar';
import StandingsMenuBar from './StandingsMenuBar';


function ContentMenuBar() {
    return (
        <div className="content-menu-bar">
            <TopMenuBar />
            <DataMenuBar />
            <StandingsMenuBar />
        </div>
    );
  }

export default ContentMenuBar;