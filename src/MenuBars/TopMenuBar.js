import React from "react";
import './TopMenuBar.css';


function TopMenuBar(props) {
    return (
        <div className="top-menu-bar">
            {props.children}
        </div>
    );
  }

export default TopMenuBar;