import React from "react";
import { useState } from 'react';
import './HomePage.css';
import TopMenuBar from './TopMenuBar';
import GamesBar from "./GamesBar";
import CalendarMenuBar from "./CalendarMenuBar";
import DateLabelBar from "./DateLabelBar";


function HomePage({ handleToggleClick, isActive}) {
    const [selectedDate, setSelectedDate] = useState([]);
    const handleSelectedDate = () => {
        setSelectedDate();
    }
    return (
        <div className="home-page">
            <TopMenuBar 
                handleToggleClick={handleToggleClick} 
                isActive={isActive}
            />
            <CalendarMenuBar/>
            <DateLabelBar selectedDate={selectedDate} />
            <GamesBar/>
        </div>
    );
}

export default HomePage;