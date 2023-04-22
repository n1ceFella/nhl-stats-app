import React from "react";
import './Toggle.css';


function Toggle({ handleToggleClick, isActive, togglePosition }) {
    return (
        <div 
            className="toggle"
            style={{ left: `${togglePosition}px` }}
        >
        <span
            className={`active${isActive ? " on" : " off"}`}          
            onClick={handleToggleClick}
            >
            <ion-icon name="grid-outline"></ion-icon>
        </span>
        </div>
    );
  }

export default Toggle;