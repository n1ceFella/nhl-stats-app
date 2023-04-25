import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';
import './StandingsMenuBar.css';
import StandingsTable from '../Components/StandingsTable';
import ChartMenuBar from '../MenuBars/ChartMenuBar';


function StandingsMenuBar() {
    const [teams, setTeams] = useState([]);
    const [standings, setStandings] = useState([]);
    var data = [];
    useEffect(() => {
        const fetchStandings = async () => {
            try {
                const response = await axios.get('/data');
                setStandings(response.data);
                data = [
                    ...response.data.records[0].teamRecords,
                    ...response.data.records[1].teamRecords,
                    ...response.data.records[2].teamRecords,
                    ...response.data.records[3].teamRecords,
                ];
                data = data.sort((a,b) => a.leagueRank - b.leagueRank);
                setTeams(data);
                // setTeams(response.data.records[3].teamRecords);
            } catch (error) {
                console.error(error);
            }
        };
    fetchStandings();
  }, []);
    return (
        <div className="standings-menu-bar">
            <StandingsTable teams={teams}/>
            <ChartMenuBar standings={standings}/>
        </div>
    );
  }

export default StandingsMenuBar;