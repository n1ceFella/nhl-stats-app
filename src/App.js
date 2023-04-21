import logo from './logo.svg';
import Menu from './Menu.js';
import Toggle from './Toggle';
import React, { useState } from "react";
import './App.css';
import Search from './Search';
import ProfileIcon from './ProfileIcon';
import DataBar from './DataBar';
import StandingsTable from './StandingsTable';


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
      <Search />
      <ProfileIcon />
      <DataBar />
      <StandingsTable />
    </div>
  );
}

export default App;
