import React from "react";
import { useState } from 'react';
import './Toggle.css';


function Toggle({ handleToggleClick, isActive }) {
    return (
      <div className="toggle">
        <span
          className={`${isActive ? "active" : ""}`}
          onClick={handleToggleClick}
        >
          <ion-icon name="grid-outline"></ion-icon>
        </span>
      </div>
    );
  }

export default Toggle;