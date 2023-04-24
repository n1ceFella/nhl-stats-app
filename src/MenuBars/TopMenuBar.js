import React, { useState } from "react";
import './TopMenuBar.css';
import Search from '../Components/Search';
import ProfileIcon from '../Components/ProfileIcon';
import Toggle from '../Components/Toggle';


function TopMenuBar({ handleToggleClick, isActive}) {

    return (
        <div className="top-menu-bar">
            <div className ="toggle">
                <Toggle 
                    handleToggleClick={handleToggleClick} 
                    isActive={isActive}
                />
            </div>
            <div className="search-profile">
                <Search />
                <ProfileIcon />
            </div>

        </div>
    );
  }

export default TopMenuBar;