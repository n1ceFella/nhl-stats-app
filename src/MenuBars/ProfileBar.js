import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';
import './ProfileBar.css';


function ProfileBar() {
    const [user, setUser] = useState(false);
    useEffect(() => {
        getSessionData();
      }, []);
    async function getSessionData() {
        try {
          const response = await axios.get('/session'); // Make a request to the server endpoint that returns session data
          const sessionData = response.data; // Assuming the server returns the session data in JSON format
          setUser(sessionData.user);
          console.log(sessionData);
          // Process the session data
        } catch (error) {
          console.log(error);
          // Handle error
        }
    
    return (
        <div className="profile-bar">
            <p>HELLO</p>
            {/* {user.loginHistory.map((history) => (
                {history}
            ))} */}
        </div>
    );
    }
  }

export default ProfileBar;