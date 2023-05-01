import React from "react";
import { useState } from 'react';
import './HomePage.css';
import TopMenuBar from './TopMenuBar';
import GamesBar from "./GamesBar";
import CalendarMenuBar from "./CalendarMenuBar";
import DateLabelBar from "./DateLabelBar";


function HomePage({ handleToggleClick, isActive}) {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange  = (date) => {
        setSelectedDate(date);
    }

    return (
        <div className="home-page">
            <TopMenuBar 
                handleToggleClick={handleToggleClick} 
                isActive={isActive}
            />
            <CalendarMenuBar onDateChange={handleDateChange}/>
            <DateLabelBar selectedDate={selectedDate} />
            <GamesBar selectedDate={selectedDate}/>
        </div>
    );
}

export default HomePage;