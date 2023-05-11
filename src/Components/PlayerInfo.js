import React from "react";
import './PlayerInfo.css';


function PlayerInfo({playerData}) {
    return (
        <div className="player-info">
            <h2>{playerData.fullName}</h2>
            <h2>{playerData.primaryNumber}</h2>
            <h2>{playerData.birthDate}</h2>
            <h2>{playerData.birthCity}</h2>
            <h2>{playerData.height}</h2>
            <h2>{playerData.weight}</h2>
            <h2>{playerData.currentTeam}</h2>
            <h2>{playerData.primaryPosition}</h2>
        </div>
    );
}

export default PlayerInfo;