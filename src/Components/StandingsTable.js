import React from "react";
import './StangingsTable.css';


function StandingsTable({teams}) {
    return (
        <div className="table-container">
            {typeof teams === 'object' && (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col" className="logo"></th>
                        <th scope="col">Team</th>
                        <th scope="col">W</th>
                        <th scope="col">L</th>
                        <th scope="col">OT</th>
                        <th scope="col">GA</th>
                        <th scope="col">GS</th>
                        <th scope="col">Pts</th>
                        <th scope="col">CR</th>
                        <th scope="col">LR</th>
                        <th scope="col">GP</th>
                        <th scope="col">Streak</th>

                    </tr>
                </thead>
                <tbody>
                    {teams.map((record, index) => (
                        <tr key={record.team.id}>
                            <td className="logo">
                                <img src={record.url} alt="img"/>
                            </td>
                            <td className="team-name">{record.team.name}</td>
                            <td>{record.leagueRecord.wins}</td>
                            <td>{record.leagueRecord.losses}</td>
                            <td>{record.leagueRecord.ot}</td>
                            <td>{record.goalsAgainst}</td>
                            <td>{record.goalsScored}</td>
                            <td>{record.points}</td>
                            <td>{record.conferenceRank}</td>
                            <td>{record.leagueRank}</td>
                            <td>{record.gamesPlayed}</td>
                            <td>{record.streak.streakCode}</td>
                        </tr>
                    ))}
                </tbody>
            </table> 
        )}
        </div>
    );
  }

export default StandingsTable;