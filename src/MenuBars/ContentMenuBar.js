import React from "react";
import './ContentMenuBar.css';
import TopMenuBar from './TopMenuBar';
import DataMenuBar from './DataMenuBar';
import StandingsMenuBar from './StandingsMenuBar';


function ContentMenuBar({ handleToggleClick, isActive}) {
    return (
        <div className="content-menu-bar">
            <TopMenuBar 
                handleToggleClick={handleToggleClick} 
                isActive={isActive}
            />
            <DataMenuBar />
            <StandingsMenuBar />
        </div>
    );
  }

export default ContentMenuBar;