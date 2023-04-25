import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';
import './StandingsMenuBar.css';
import StandingsTable from '../Components/StandingsTable';
import ChartMenuBar from '../MenuBars/ChartMenuBar';


function StandingsMenuBar() {
    const [teams, setTeams] = useState([]);
    const [standings, setStandings] = useState([]);
    var teamsData = [];
    var standingsData = [];
    useEffect(() => {
        const fetchStandings = async () => {
            try {
                const response = await axios.get('/data');
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
        <div className="standings-menu-bar">
            <StandingsTable teams={teams}/>
            <ChartMenuBar standings={standings} teams={teams}/>
        </div>
    );
  }

export default StandingsMenuBar;