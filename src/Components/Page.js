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
import LoginPage from '../MenuBars/LoginPage';
import TeamsMenuBar from '../MenuBars/TeamsMenuBar';
import RosterBar from '../MenuBars/RosterBar';
import PlayerBar from '../MenuBars/PlayerBar';
import RegistrationForm from './RegistrationForm';


function Page() {
  //Move to Toggle component
  const [isNavActive, setIsNavActive] = useState(false);
  const [selectedTeamName, setSelectedTeamName] = useState("Team Name");

  const handleToggleClick = () => {
    setIsNavActive(!isNavActive);
  };
  const handleTeamName = (teamName) => {
    setSelectedTeamName(teamName);
  }
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
                            <LoginPage/>
                        }/>
                        <Route path="/teams" element={
                            <TeamsMenuBar onTeamNameClick={handleTeamName}/>
                        }/>
                        <Route path="/teams/:id/roster" element={
                            <RosterBar teamName={selectedTeamName}/>
                        }/>
                        <Route path="/signup" element={
                            <RegistrationForm/>
                        }/>
                        <Route path="/player/:id/info" element={
                            <PlayerBar/>
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