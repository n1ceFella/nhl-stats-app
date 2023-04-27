import React from "react";
import './HomePage.css';
import TopMenuBar from './TopMenuBar';


function HomePage() {
    return (
        <div className="home-page">
            <TopMenuBar/>

            <div className="right"></div>
        </div>
    );
}

export default HomePage;