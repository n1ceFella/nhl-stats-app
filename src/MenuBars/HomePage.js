import React from "react";
import './HomePage.css';
import TopMenuBar from './TopMenuBar';
import GamesBar from "./GamesBar";
import CalendarMenuBar from "./CalendarMenuBar";
import DateLabelBar from "./DateLabelBar";


function HomePage({ handleToggleClick, isActive}) {
    return (
        <div className="home-page">
            <TopMenuBar 
                handleToggleClick={handleToggleClick} 
                isActive={isActive}
            />
            <CalendarMenuBar/>
            <DateLabelBar/>
            <GamesBar/>
        </div>
    );
}

export default HomePage;