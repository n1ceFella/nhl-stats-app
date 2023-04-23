import React, { useState } from "react";
import './TopMenuBar.css';
import Search from '../Components/Search';
import ProfileIcon from '../Components/ProfileIcon';
import Toggle from '../Components/Toggle';


function TopMenuBar({ handleToggleClick, isActive}) {

    return (
        <div className="top-menu-bar">
            <Toggle 
                handleToggleClick={handleToggleClick} 
                isActive={isActive}
            />
            <Search />
            <ProfileIcon />
        </div>
    );
  }

export default TopMenuBar;