import React, { useState } from "react";
import './TopMenuBar.css';
import Search from '../Components/Search';
import ProfileIcon from '../Components/ProfileIcon';
import Toggle from '../Components/Toggle';


function TopMenuBar({isLoggedIn, onLogout}) {

    return (
        <div className="top-menu-bar">
            <div className="search-profile">
                <Search />
                <ProfileIcon />
                {isLoggedIn && (
                <div className='login-container'>
                     <button onClick={onLogout}>Logout</button>
                </div> 
            )}
            </div>

        </div>
    );
  }

export default TopMenuBar;