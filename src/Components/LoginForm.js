import React, { useState } from "react";
import { useNavigate  } from 'react-router-dom';

import axios from 'axios';
import './LoginForm.css';


function LoginForm() {
    const navigate  = useNavigate ();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const handleLogin = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post('/login', {
            email,
            password
          });
          navigate('/profile'); // Redirect to /home
        //   setMessage(`Logged in successfully. Token: ${message}`);
        } catch (error) {
          setMessage(error.response.data.error);
        }
      };

    return (
        <div className="login-form">
            <form method="post" action="/login" onSubmit={handleLogin}>
                <span><h2>Login</h2></span>
                <input id="email" name="email" type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)}/>
                <input id="password" name="password" type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
                <span>Don't have account yet? <a href="/signup">SignUp</a></span>
                <input type="submit" id="submit" value="Login" />
            </form>
        </div>
    );
}

export default LoginForm;