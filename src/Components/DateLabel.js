import React from "react";
import './DateLabel.css';


function DateLabel({selectedDate}) {
    return (
        <div className="date-label">
            {selectedDate}
        </div>
    );
}

export default DateLabel;