import React from "react";
import './DataMenuBar.css';


function DataMenuBar(props) {
    return (
        <div class="data-menu-bar">
            {props.children}
        </div>
    );
  }

export default DataMenuBar;