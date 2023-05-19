import React from "react";
import './PlayerBar.css';
import PlayerInfo from '../Components/PlayerInfo';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import axios from 'axios';


function PlayerBar() {
    const { id } = useParams();
    const [playerData, setPlayerData] = useState({});
    useEffect(() => {
        const fetchStandings = async () => {
            try {
                console.log(id);
                const response = await axios.get('https://wild-puce-seagull-gown.cyclic.app/player/' + id + '/info'); //'https://wild-puce-seagull-gown.cyclic.app/player/' + id + '/info'
                console.log(response.data);
                setPlayerData(response.data);
            } catch (error) {
                console.error(error);
            }
        };
    fetchStandings();
  }, [id]);
    return (
        <div className="player-bar">
            <PlayerInfo playerData={playerData}/>
        </div>
    );
}

export default PlayerBar;