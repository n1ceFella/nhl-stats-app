import React from "react";
import './NavMenuBar.css';


function NavMenuBar(props) {
    return (
        <div class="nav-menu-bar">
            {props.children}
        </div>
    );
  }

export default NavMenuBar;