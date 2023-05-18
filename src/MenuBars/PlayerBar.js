import React from "react";
import './PlayerBar.css';
import PlayerInfo from '../Components/PlayerInfo';
import { useParams } from 'react-router';


function PlayerBar() {
    const { id } = useParams();
    return (
        <div className="player-bar">
            <PlayerInfo id={id}/>
        </div>
    );
}

export default PlayerBar;