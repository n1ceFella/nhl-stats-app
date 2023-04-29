import React from "react";
import './Game.css';


function Games({game}) {
    return (
        <tr>
            <td>{game.teams.home.team.name}</td>
            <td className="logo">
                <img src={game.teams.home.url} alt="img"/>
            </td>
            <td>vs</td>
            <td className="logo">
                <img src={game.teams.away.url} alt="img"/>
            </td>
            <td>{game.teams.away.team.name}</td>
            <td>{game.gameDate}</td>
        </tr>
    );
}

export default Games;