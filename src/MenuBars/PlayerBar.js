import React from "react";
import './PlayerBar.css';
import axios from 'axios';
import PlayerInfo from '../Components/PlayerInfo';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';


function PlayerBar() {
    const { id } = useParams();
    const [playerData, setPlayerData] = useState();
    useEffect(() => {
        const fetchStandings = async () => {
            try {
                let playerData = [];
                const response = await axios.get('/player/' + id + '/info'); 
                playerData = response.data;
                setPlayerData(playerData);
            } catch (error) {
                console.error(error);
            }
        };
    fetchStandings();
  }, []);
    return (
        <div className="player-bar">
            <PlayerInfo playerData={playerData}/>
        </div>
    );
}

export default PlayerBar;