import React from "react";
import { useState } from 'react';
import './DataBar.css';


function DataBar({teams}) {
    const topTeam = teams.slice(0, 1);
    const [activeIndex, setActiveIndex] = useState();
    var data = [];
    topTeam.map((topTeam) => {
        data = [
            { id: 1, data: topTeam.gamesPlayed, dataInfo: "Games Played", icon:"eye-outline" },
            { id: 2, data: 32, dataInfo: "Number Of Teams", icon:"podium-outline" },
            { id: 3, data: topTeam.points, dataInfo: "Top Scores", icon:"flame-outline" },
            { id: 4, data: topTeam.team.name, dataInfo: "Top Team", icon:"shirt-outline" }
          ];
      });

    
    const handleMouseOver = (index) => {
        setActiveIndex(index);
    };
    return (
        <div className="data-bar-container">
            {data.map((component, index) => (
            <div
                key={component.id}
                className={`data-container${index === activeIndex ? " active" : ""}`}
                onMouseOver ={() => handleMouseOver(index)}
            >
                <div className="data">
                    <div className="data-number">{component.data}</div>
                    <div className="data-info">{component.dataInfo}</div>
                </div>
                <span className="data-icon"><ion-icon name={component.icon}></ion-icon></span>
            </div>
            ))}
        </div>
    );
  }

export default DataBar;