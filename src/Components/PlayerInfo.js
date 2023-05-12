import React from "react";
import './PlayerInfo.css';
import { useState, useEffect } from 'react';
import axios from 'axios';


function PlayerInfo({id}) {
    const [playerData, setPlayerData] = useState({});
    useEffect(() => {
        const fetchStandings = async () => {
            try {
                console.log(id);
                const response = await axios.get('/player/' + id + '/info');
                console.log(response.data);
                setPlayerData(response.data);
            } catch (error) {
                console.error(error);
            }
        };
    fetchStandings();
  }, []);
    return (
        <div className="player-info">
            <div>
                <p><strong>Name: </strong>{playerData.fullName}</p>
                <p><strong>Number: </strong>{playerData.primaryNumber}</p>
                <p><strong>Date of Birth:  </strong>{playerData.birthDate}</p>
                <p><strong>City of Birth: </strong>{playerData.birthCity}</p>
                <p><strong>Country of Birth: </strong>{playerData.birthCountry}</p>
                <p><strong>Height: </strong>{playerData.height}</p>
                <p><strong>Weight: </strong>{playerData.weight}</p>
                <p><strong>Team: </strong>{playerData.currentTeam}</p>
                <p><strong>Position: </strong>{playerData.primaryPosition}</p>
            </div>
        </div>
    );
}

export default PlayerInfo;