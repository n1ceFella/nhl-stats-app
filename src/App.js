import logo from './logo.svg';
import Menu from './Menu.js';
import Toggle from './Toggle';
import React, { useState } from "react";
import './App.css';


function App() {
  const [isNavActive, setIsNavActive] = useState(false);
  const [menuWidth, setMenuWidth] = useState(300);
  const [togglePosition, setTogglePosition] = useState(340);

  const handleToggleClick = () => {
    setIsNavActive(!isNavActive);
    setMenuWidth(isNavActive ? 300 : 70);
    setTogglePosition(isNavActive ? 340 : 110)
  };

  return (
    <div>
      <Menu menuWidth={menuWidth} />
      <Toggle handleToggleClick={handleToggleClick} isActive={isNavActive} togglePosition={togglePosition} />
    </div>
  );
}

export default App;
