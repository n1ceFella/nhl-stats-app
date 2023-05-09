import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './Page.css';
import './Menu.css';
import Menu from './Menu';
import Toggle from './Toggle';
import React, { useState } from "react";
import ContentMenuBar from '../MenuBars/ContentMenuBar';
import HomePage from '../MenuBars/HomePage';
import AboutPage from '../MenuBars/AboutPage';
import TopMenuBar from '../MenuBars/TopMenuBar';
import '../MenuBars/TopMenuBar.css';
import RegistrationPage from '../MenuBars/RegistrationPage';
import TeamsMenuBar from '../MenuBars/TeamsMenuBar';


function Page() {
  //Move to Toggle component
  const [isNavActive, setIsNavActive] = useState(false);

  const handleToggleClick = () => {
    setIsNavActive(!isNavActive);
  };
    return (
        <div className="main-page">
            <Menu isActive={isNavActive}/>
            <div className='toggle-bar'>
                <Toggle 
                        handleToggleClick={handleToggleClick} 
                        isActive={isNavActive}
                />
            </div>

            <div className='home'>
                <TopMenuBar/>
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
                        <Route path="/teams" element={
                            <TeamsMenuBar/>
                        }/>
                        <Route path="/teams/:id/roster" element={
                            <ContentMenuBar/>
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