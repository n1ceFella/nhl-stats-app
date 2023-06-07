import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';
import './ProfileBar.css';


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
          const response = await axios.get('/session'); // Make a request to the server endpoint that returns session data
          const sessionData = response.data; // Assuming the server returns the session data in JSON format
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
          <p>Loading...</p>
        ) : (
          <>
            {user && <p>Email: {user.user.email}</p>}
            {user && user.user.loginHistory && user.user.loginHistory.map((history, index) => (
              <div key={index}>
                {/* Display the properties of each history element */}
                <p>Date: {history.dateTime}</p>
                <p>Agent: {history.userAgent}</p>
                {/* Add more properties as needed */}
              </div>
            ))}
            {/* Display other user data */}
            
          </>
        )}
      </div>
    );
}

export default ProfileBar;