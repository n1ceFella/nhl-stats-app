import React from "react";
import './HomePage.css';
import TopMenuBar from './TopMenuBar';
import ContentMenuBar from "./ContentMenuBar";


function ContentPage({ handleToggleClick, isActive}) {
    return (
        <div className="home-page">
            <TopMenuBar 
                handleToggleClick={handleToggleClick} 
                isActive={isActive}
            />
            {/* <div className="right"></div> */}
        </div>
    );
}

export default ContentPage;