import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './Page.css';
import './Menu.css';
import Menu from './Menu';
import React, { useState } from "react";
import ContentMenuBar from '../MenuBars/ContentMenuBar';


function Page() {
  //Move to Toggle component
  const [isNavActive, setIsNavActive] = useState(false);
  const [menuWidth, setMenuWidth] = useState(20);

  const handleToggleClick = () => {
    setIsNavActive(!isNavActive);
    setMenuWidth(isNavActive ? 20 : 4.5);
  };
    return (
        <div className="main-page">
            <Menu menuWidth={menuWidth} />
            <Router>
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="/home" element={     
                        <ContentMenuBar 
                            handleToggleClick={handleToggleClick} 
                            isActive={isNavActive}
                        />
                    }/>
                </Routes>
            </Router>
        </div>
    );
}

export default Page;