import React from "react";
import './Game.css';


function Games({game}) {
    const date = new Date(game.gameDate);
    const options = { timeZone: 'America/New_York', hour12: false, hour: 'numeric', minute: 'numeric' };
    const easternTime = date.toLocaleString('en-US', options);
    return (
        <tr>
            <td>{game.teams.home.team.name}</td>
            <td className="logo">
                <img src={game.teams.home.url} alt="img"/>
            </td>
            <td><strong>{game.teams.home.score}</strong></td>
            <td>vs</td>
            <td><strong>{game.teams.away.score}</strong> </td>
            <td className="logo">
                <img src={game.teams.away.url} alt="img"/>
            </td>
            <td>{game.teams.away.team.name}</td>
            <td>{easternTime}</td>
        </tr>
    );
}

export default Games;