import React, { useState } from "react";
import './TopMenuBar.css';
import Search from '../Components/Search';
import ProfileIcon from '../Components/ProfileIcon';
import Toggle from '../Components/Toggle';


function TopMenuBar() {

    //Move to Toggle component
    const [isNavActive, setIsNavActive] = useState(false);
    const [menuWidth, setMenuWidth] = useState(20);
    const [togglePosition, setTogglePosition] = useState(340);

    const handleToggleClick = () => {
    setIsNavActive(!isNavActive);
    setMenuWidth(isNavActive ? 20 : 4.5);
    setTogglePosition(isNavActive ? 340 : 110);
    };

    return (
        <div className="top-menu-bar">
            <Toggle 
                handleToggleClick={handleToggleClick} 
                isActive={isNavActive}
                togglePosition={togglePosition} 
            />
            <Search />
            <ProfileIcon />
        </div>
    );
  }

export default TopMenuBar;