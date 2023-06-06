import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import axios from 'axios';
import './RegistrationForm.css';


function RegistrationForm() {
    const navigate  = useNavigate ();
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [message, setMessage] = useState('');
  
    const handleRegister = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post('/register', {
          userName,
          email,
          password,
          password2
        });
          navigate('/signin'); // Redirect to /home
        
      } catch (error) {
        setMessage(error.response.data.error);
      }
    };
    return (
        <div className="register-form">
            <form method='post' onSubmit={handleRegister}>
                <label id="reg-label">Sign Up</label>
                <input className="reg-input" id="username" type="text" name="username" placeholder="Username" required onChange={(e) => setUserName(e.target.value)}/>
                
                <input className="reg-input" type="email" name="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)}/>
                
                <input className="reg-input" type="password" name="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)}/>
                
                <input className="reg-input" type="password" name="confirm-password" placeholder="Confirm Password" required onChange={(e) => setPassword2(e.target.value)}/>
                
                <input className="reg-submit" type="submit" value="Register"/>
            </form>
            {message && (
                <div className='error-container'>
                    <div className='error-message'>
                        {<p>{message}</p>}
                    </div>
                </div> 
            )}
        </div>
    );
}

export default RegistrationForm;