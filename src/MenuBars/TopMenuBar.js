import React, { useState } from "react";
import './TopMenuBar.css';
import Search from '../Components/Search';
import ProfileIcon from '../Components/ProfileIcon';
import Toggle from '../Components/Toggle';


function TopMenuBar() {

    return (
        <div className="top-menu-bar">
            <div className="search-profile">
                <Search />
                <ProfileIcon />
            </div>

        </div>
    );
  }

export default TopMenuBar;