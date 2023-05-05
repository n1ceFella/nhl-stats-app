import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './Page.css';
import './Menu.css';
import Menu from './Menu';
import React, { useState } from "react";
import ContentMenuBar from '../MenuBars/ContentMenuBar';
import HomePage from '../MenuBars/HomePage';
import AboutPage from '../MenuBars/AboutPage';
import TopMenuBar from '../MenuBars/TopMenuBar';
import '../MenuBars/TopMenuBar.css';
import RegistrationPage from '../MenuBars/RegistrationPage';


function Page() {
  //Move to Toggle component
  const [isNavActive, setIsNavActive] = useState(false);
  const [menuWidth, setMenuWidth] = useState(25);

  const handleToggleClick = () => {
    setIsNavActive(!isNavActive);
    setMenuWidth(isNavActive ? 25 : 4.5);
    
  };
    return (
        <div className="main-page">
            <Menu menuWidth={menuWidth}/>
            <div className='home'>
                <TopMenuBar 
                    handleToggleClick={handleToggleClick} 
                    isActive={isNavActive}
                />
                <Router>
                    <Routes>
                        <Route path="/" element={<Navigate to="/home" />} />
                        <Route path="/home" element={
                            <HomePage/>

                        }/>
                        <Route path="/standings" element={
                            <div className='standings'>
                                <ContentMenuBar/>
                            </div>

                        }/>
                        <Route path="/about" element={
                            <AboutPage/>
                        }/>
                        <Route path="/signin" element={
                            <RegistrationPage/>
                        }/>
                        <Route path="/*" elements={     
                            <ContentMenuBar/>
                        }/>
                    </Routes>
                </Router>
            </div>

            
        </div>
    );
}

export default Page;