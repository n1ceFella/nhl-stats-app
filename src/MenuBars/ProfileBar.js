import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';
import './ProfileBar.css';
import logo from '../refresh-outline.svg';


function ProfileBar() {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getSessionData();
    }, []);
    useEffect(() => {
      if(user){
        setLoading(false);
    }
  }, [user]);
    async function getSessionData() {
        try {
          const response = await axios.get('https://wild-puce-seagull-gown.cyclic.app//session'); // Make a request to the server endpoint that returns session data
          console.log(response);
          const sessionData = response.data;
          setUser(sessionData);
          // Process the session data
        } catch (error) {
          console.log(error);
          // Handle error
        }
    }
    return (
      <div className="profile-bar">
      {loading ? (
        // <p>Loading...</p>
        <img src={logo} className="load-logo" alt="logo" />
      ) : (
        <div>
          <div>{user && <h2>Email: {user.user.email}</h2>}</div>
          <div>
            <table className="table">
              <thead>
                  <tr>
                      <th scope="col">Date</th>
                      <th scope="col">Agent</th>
                  </tr>
              </thead>
              <tbody>
                      {user && user.user.loginHistory && user.user.loginHistory.map((history, index) => (
                      <tr key={history._id}>
                          <td>{history.dateTime}</td>
                          <td>{history.userAgent}</td>
                      </tr>
                  ))}
              </tbody>
            </table> 
          </div>
        </div>
        )}
      </div>
    );
}

export default ProfileBar;