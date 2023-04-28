import React from "react";
import './HomePage.css';
import TopMenuBar from './TopMenuBar';
import GamesBar from "./GamesBar";


function HomePage({ handleToggleClick, isActive}) {
    return (
        <div className="home-page">
            <TopMenuBar 
                handleToggleClick={handleToggleClick} 
                isActive={isActive}
            />
            <GamesBar/>
        </div>
    );
}

export default HomePage;