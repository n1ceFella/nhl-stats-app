import React from "react";
import './RosterBar.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';


function RosterBar(props) {
    const { id } = useParams();
    const [team, setTeam] = useState([]);
    const [selectedTeamName, setSelectedTeamName] = useState();
    useEffect(() => {
        const fetchStandings = async () => {
            try {
                let teamData = [];
                const response = await axios.get('https://wild-puce-seagull-gown.cyclic.app/teams/' + id + '/roster'); 
                teamData = response.data;
                setTeam(teamData);
            } catch (error) {
                console.error(error);
            }
        };
    fetchStandings();
  }, []);

    return (
        <div className="roster-bar">
            <h2>{props.teamName}</h2>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Full Name</th>
                        <th scope="col">Number</th>
                        <th scope="col">Position</th>
                        <th scope="col">Goals</th>
                        <th scope="col">Assists</th>
                        <th scope="col">Hits</th>
                        <th scope="col">Shots</th>
                        <th scope="col">Games</th>
                        <th scope="col">PIM</th>
                        <th scope="col">Blocked</th>
                        <th scope="col">ToI</th>
                    </tr>
                </thead>
                <tbody>
                    {team.map((record) => (
                        <tr key={record.person.id}>
                            <td><a href={`/player/${record.person.id}/info`}>{record.person.fullName}</a></td>   
                            <td>{record.jerseyNumber}</td>
                            <td>{record.position.code}</td>
                            <td>{record.stat.goals}</td>
                            <td>{record.stat.assists}</td>
                            <td>{record.stat.hits}</td>
                            <td>{record.stat.shots}</td>
                            <td>{record.stat.games}</td>
                            <td>{record.stat.pim}</td>
                            <td>{record.stat.blocked}</td>
                            <td>{record.stat.timeOnIce}</td>
                        </tr>
                    ))}
                </tbody>
            </table> 
        </div>
    );
}

export default RosterBar;