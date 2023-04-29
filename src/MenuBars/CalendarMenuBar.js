import React from "react";
import { useState } from "react";
import './CalendarMenuBar.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { IonIcon } from "@ionic/react";
import { calendarOutline } from "ionicons/icons";


// const CustomInput = ({ value, onClick }) => (
//     <button type="button" className="custom-input" onClick={onClick}>
//       {/* <IonIcon icon={calendarOutline} /> */}
//     </button>
//   );


function CalendarMenuBar() {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
    const handleSubmit = event => {
        // Perform actions based on selectedDate
      }
    return (
        <div className="calendar-menu-bar">
            <form onSubmit={handleSubmit}>
            <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy"
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