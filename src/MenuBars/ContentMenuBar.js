import React from "react";
import './ContentMenuBar.css';


function ContentMenuBar(props) {
    return (
        <div className="content-menu-bar">
            {props.children}
        </div>
    );
  }

export default ContentMenuBar;