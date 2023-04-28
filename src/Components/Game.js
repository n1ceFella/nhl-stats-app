import React from "react";
import './Game.css';


function Games({game}) {
    return (
        <div className="game-component">
            <div className="game-date"><p><strong>{game.gameDate}</strong></p></div>
            <div className="game-team-home">
                <strong>{game.teams.home.team.name}</strong>
                <img src={game.teams.home.url} alt="team-logo" />
            </div>
            <div className="game-team-away">
                <img src={game.teams.away.url} alt="team-logo" />
                <strong>{game.teams.away.team.name}</strong>
            </div>
        </div>
    );
}

export default Games;