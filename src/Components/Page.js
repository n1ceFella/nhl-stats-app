import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './Page.css';
import './Menu.css';
import axios from 'axios';
import Menu from './Menu';
import Toggle from './Toggle';
import React, { useEffect, useState } from "react";
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


function Page() {
  //Move to Toggle component
  const [isNavActive, setIsNavActive] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Check login status on component mount
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const response = await axios.get('/check-login', {
        withCredentials: true, // Include session cookie
      });

      if (response.status === 200) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    } catch (error) {
      console.log(error);
      setLoggedIn(false);
    }
    console.log("checkLoginStatus");
  };

  const logout = async () => {
    try {
      const response = await axios.get('/logout', {
        withCredentials: true, // Include session cookie
      });

      if (response.status === 200) {
        setLoggedIn(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleToggleClick = () => {
    setIsNavActive(!isNavActive);
  };

    return (
        <div className="main-page">
            <Menu isActive={isNavActive} isLoggedIn={loggedIn}/>
            <div className='toggle-bar'>
                <Toggle 
                        handleToggleClick={handleToggleClick} 
                        isActive={isNavActive}
                />
            </div>

            <div className='home'>
                <TopMenuBar isLoggedIn={loggedIn} onLogout={logout}/>
                <Router>
                    <Routes>
                        <Route path="/" element={<Navigate to="/home" />} />
                        <Route path="/home" element={
                            <HomePage/>
                        }/>
                        <Route path="/profile" element={
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
                            <LoginPage onLogin={setLoggedIn}/>
                        }/>
                        <Route path="/teams" element={
                            <TeamsMenuBar/>
                        }/>
                        <Route path="/team/:id/roster" element={
                          <RosterBar/>
                        }/>
                        <Route path="/signup" element={
                            <RegistrationPage/>
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
