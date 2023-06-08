import React from "react";
import './LoginPage.css';
import '../Components/LoginForm';
import LoginForm from "../Components/LoginForm";


function LoginPage({ onLogin }) {
    return (
        <div className="login-page">
            <LoginForm onLogin={onLogin}/>
        </div>
    );
}

export default LoginPage;