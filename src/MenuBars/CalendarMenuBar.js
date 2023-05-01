import React from "react";
import { useState } from "react";
import './CalendarMenuBar.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function CalendarMenuBar({onDateChange, selectedDate}) {
    const handleDateChange = (date) => {
      onDateChange(date);
    };
    const handleSubmit = event => {
        // Perform actions based on selectedDate
        event.preventDefault();
        
    }
    return (
        <div className="calendar-menu-bar">
            <form onSubmit={handleSubmit}>
            <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="EEEE, MMMM d, yyyy"
                customInput={
                    <button className="calandar-button" type="button">
                        <ion-icon name="calendar-outline"></ion-icon>
                    </button>
                }
            />
            </form>
        </div>
    );
}

export default CalendarMenuBar;