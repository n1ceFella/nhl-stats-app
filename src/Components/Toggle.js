import React from "react";
import './Toggle.css';


function Toggle({ handleToggleClick, isActive}) {
    return (
        <div 
            className="toggle"
        >
        <span
            className={`${isActive ? "active" : ""}`}          
            onClick={handleToggleClick}
            >
            <ion-icon 
                name="chevron-back-outline"
                style={{ transform: isActive ? "rotate(180deg)" : "" }}
            ></ion-icon>
        </span>
        </div>
    );
  }

export default Toggle;