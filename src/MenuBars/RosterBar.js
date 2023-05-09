import React from "react";
import './RosterBar.css';
import axios from 'axios';
import { useState, useEffect, useParams  } from 'react';


function RosterBar() {
    const { id } = useParams();
    const [team, setTeam] = useState([]);
    useEffect(() => {
        const fetchStandings = async () => {
            try {
                let teamsData = [];
                const response = await axios.get('/teams/' + id + '/roster'); 
                teamData = response.data.roster;
                setTeam(teamsData);
            } catch (error) {
                console.error(error);
            }
        };
    fetchStandings();
  }, []);

    return (
        <div className="roster-bar">
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
                            <td>{record.person.fullName}</td>
                            <td>{record.jerseyNumber}</td>
                            <td>{record.position.code}</td>
                            <td>{record.goals}</td>
                            <td>{record.assists}</td>
                            <td>{record.hits}</td>
                            <td>{record.shots}</td>
                            <td>{record.games}</td>
                            <td>{record.pims}</td>
                            <td>{record.blocked}</td>
                            <td>{record.toi}</td>
                        </tr>
                    ))}
                </tbody>
            </table> 
        </div>
    );
}

export default RosterBar;