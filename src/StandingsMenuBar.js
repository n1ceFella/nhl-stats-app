import React from "react";
import './StandingsMenuBar.css';


function StandingsMenuBar(props) {
    return (
        <div class="standings-menu-bar">
            {props.children}
        </div>
    );
  }

export default StandingsMenuBar;