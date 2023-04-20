import React from "react";
import { useState } from 'react';
import './Toggle.css';


function Toggle() {

    const [active, setActive] = useState();

    const handleOnClick = (val) => {
        setActive(val);
      };

    return(
        <div className="toggle">
            <span
            className={`${active ? 'active' : ''}`}
            onClick ={() => handleOnClick(true)}
            //onMouseDown={() => handleOnClick(false)}
            
            >
                <ion-icon name="grid-outline"></ion-icon>
            </span>
        </div>
    );
}

export default Toggle;