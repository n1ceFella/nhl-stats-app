import React from "react";
import { useState } from 'react';
import './HomePage.css';
import GamesBar from "./GamesBar";
import CalendarMenuBar from "./CalendarMenuBar";
import DateLabelBar from "./DateLabelBar";


function HomePage() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange  = (date) => {
        setSelectedDate(date);
    }

    return (
        <div className="home-page">
            <CalendarMenuBar onDateChange={handleDateChange}/>
            <DateLabelBar selectedDate={selectedDate} />
            <GamesBar selectedDate={selectedDate}/>
        </div>
    );
}

export default HomePage;