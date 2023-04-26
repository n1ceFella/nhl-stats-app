import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';
import './ContentMenuBar.css';
import TopMenuBar from './TopMenuBar';
import DataMenuBar from './DataMenuBar';
import StandingsMenuBar from './StandingsMenuBar';


function ContentMenuBar({ handleToggleClick, isActive}) {
    const [teams, setTeams] = useState([]);
    const [standings, setStandings] = useState([]);
    var teamsData = [];
    var standingsData = [];
    useEffect(() => {
        const fetchStandings = async () => {
            try {
                // const response = await axios.get('/data');
                const response = await axios.get('https://wild-puce-seagull-gown.cyclic.app/standings');
                standingsData = response.data.records;
                setStandings(standingsData);
                
                teamsData = [
                    ...response.data.records[0].teamRecords,
                    ...response.data.records[1].teamRecords,
                    ...response.data.records[2].teamRecords,
                    ...response.data.records[3].teamRecords,
                ];
                teamsData = teamsData.sort((a,b) => a.leagueRank - b.leagueRank);
                setTeams(teamsData);
            } catch (error) {
                console.error(error);
            }
        };
    fetchStandings();
  }, []);
    return (
        <div className="content-menu-bar">
            <TopMenuBar 
                handleToggleClick={handleToggleClick} 
                isActive={isActive}
            />
            <DataMenuBar teams={teams}/>
            <StandingsMenuBar standings={standings} teams={teams}/>
        </div>
    );
  }

export default ContentMenuBar;