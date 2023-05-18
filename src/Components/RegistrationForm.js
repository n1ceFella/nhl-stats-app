import React from "react";
import './RegistrationForm.css';


function RegistrationForm() {
    return (
        <div className="register-form">
            <form>
                <label id="reg-label">Sign Up</label>
                <input className="reg-input" id="username" type="text" name="username" placeholder="Username"/>
                
                <input className="reg-input" type="email" name="email" placeholder="Email"/>
                
                <input className="reg-input" type="password" name="password" placeholder="Password"/>
                
                <input className="reg-input" type="password" name="confirm-password" placeholder="Confirm Password"/>
                
                <input className="reg-submit" type="submit" value="Register"/>
            </form>
        </div>
    );
}

export default RegistrationForm;