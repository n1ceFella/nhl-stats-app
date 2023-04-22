import React from "react";
import { useState } from 'react';
import './DataBar.css';


function DataBar() {
    const [activeIndex, setActiveIndex] = useState();
    const data = [
        { id: 1, dataNumber: 11.231, dataInfo: "text", icon:"eye-outline" },
        { id: 2, dataNumber: 3.2312, dataInfo: "text", icon:"podium-outline" },
        { id: 3, dataNumber: 532.5325, dataInfo: "text", icon:"flame-outline" },
        { id: 4, dataNumber: 124.1, dataInfo: "text", icon:"shirt-outline" }
      ];
    
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
                    <div className="data-number">{component.dataNumber}</div>
                    <div className="data-info">{component.dataInfo}</div>
                </div>
                <span className="data-icon"><ion-icon name={component.icon}></ion-icon></span>
            </div>
            ))}
        </div>
    );
  }

export default DataBar;