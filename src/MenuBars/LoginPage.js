import React from "react";
import './LoginPage.css';
import '../Components/LoginForm';
import LoginForm from "../Components/LoginForm";


function LoginPage() {
    return (
        <div className="login-page">
            <LoginForm/>
        </div>
    );
}

export default LoginPage;