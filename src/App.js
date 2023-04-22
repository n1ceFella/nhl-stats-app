import logo from './logo.svg';
import './App.css';
import Menu from './Menu.js';
import Toggle from './Toggle';
import React, { useState } from "react";
import Search from './Search';
import ProfileIcon from './ProfileIcon';
import DataBar from './DataBar';
import StandingsTable from './StandingsTable';
import TopMenuBar from './TopMenuBar';
import DataMenuBar from './DataMenuBar';
import NavMenuBar from './NavMenuBar';
import StandingsMenuBar from './StandingsMenuBar';
import ContentMenuBar from './ContentMenuBar';
import ChartMenuBar from './ChartMenuBar';
import ChartComponent from './ChartComponent';
import Page from './Page'


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
      <Page>
      {/* <NavMenuBar> */}
      <Menu menuWidth={menuWidth} />
      {/* </NavMenuBar> */}
      <ContentMenuBar>
        <TopMenuBar>
          <Toggle handleToggleClick={handleToggleClick} isActive={isNavActive} togglePosition={togglePosition} />
          <Search />
          <ProfileIcon />
        </TopMenuBar>
        <DataMenuBar>
          <DataBar /> 
        </DataMenuBar>
        <StandingsMenuBar>
          <StandingsTable />
          <ChartMenuBar>
            <ChartComponent />
            <ChartComponent />
          </ChartMenuBar>
        </StandingsMenuBar>
      </ContentMenuBar>
      </Page>
    </div>
  );
}

export default App;
