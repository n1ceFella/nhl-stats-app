import React from "react";
import './AboutPage.css';
import AboutBar from "./AboutBar";
import TopMenuBar from './TopMenuBar';


function AboutPage({ handleToggleClick, isActive}) {
    return (
        <div className="about-page">
            <TopMenuBar 
                handleToggleClick={handleToggleClick} 
                isActive={isActive}
            />
            <AboutBar/>
        </div>
    );
}

export default AboutPage;