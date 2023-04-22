import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './Components/Menu.js';
import Toggle from './Components/Toggle';
import React, { useState } from "react";
import Search from './Components/Search';
import ProfileIcon from './Components/ProfileIcon';
import DataBar from './MenuBars/DataBar';
import StandingsTable from './Components/StandingsTable';
import TopMenuBar from './MenuBars/TopMenuBar';
import DataMenuBar from './MenuBars/DataMenuBar';
import StandingsMenuBar from './MenuBars/StandingsMenuBar';
import ContentMenuBar from './MenuBars/ContentMenuBar';
import ChartMenuBar from './MenuBars/ChartMenuBar';
import BarChart from './Charts/BarChart';
import DoughnutChart from './Charts/DoughnutChart';
import Page from './Components/Page'



function App() {
  //Move to Toggle component
  const [isNavActive, setIsNavActive] = useState(false);
  const [menuWidth, setMenuWidth] = useState(20);
  const [togglePosition, setTogglePosition] = useState(340);

  const handleToggleClick = () => {
    setIsNavActive(!isNavActive);
    setMenuWidth(isNavActive ? 20 : 4.5);
    setTogglePosition(isNavActive ? 340 : 110)
  };

  return (
    <div>
      <Page>
        <Menu menuWidth={menuWidth} />
        <Router>
          <Routes>
            <Route path="/home" element={     
              <ContentMenuBar>
                <TopMenuBar>
                  <Toggle 
                    handleToggleClick={handleToggleClick} 
                    isActive={isNavActive}
                    togglePosition={togglePosition} 
                  />
                  <Search />
                  <ProfileIcon />
                </TopMenuBar>
                <DataMenuBar>
                  <DataBar /> 
                </DataMenuBar>
                <StandingsMenuBar>
                  <StandingsTable />
                  <ChartMenuBar>
                    <BarChart />
                    <DoughnutChart />
                  </ChartMenuBar>
                </StandingsMenuBar>
              </ContentMenuBar>
            }/>
          </Routes>
        </Router>
      </Page>
    </div>
  );
}

export default App;
