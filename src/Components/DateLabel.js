import React from "react";
import './DateLabel.css';


function DateLabel({selectedDate}) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return (
        <div className="date-label">
            <strong>{selectedDate.toLocaleDateString('en-US',options)}</strong>
        </div>
    );
}

export default DateLabel;