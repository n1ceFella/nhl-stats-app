import React from "react";
import './DateLabelBar.css';
import DateLabel from "../Components/DateLabel";


function DateLabelBar({selectedDate}) {
    return (
        <div className="date-label-bar">
            <DateLabel selectedDate={selectedDate}/>
        </div>
    );
}

export default DateLabelBar;