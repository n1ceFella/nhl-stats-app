import React from "react";
import './LoginForm.css';


function LoginForm() {
    return (
        <div className="login-form">
            <form method="post" action="/login">
                <span><h2>Login</h2></span>
                <input id="email" name="email" type="email" placeholder="Email"/>
                <input id="password" name="password" type="password" placeholder="Password" required />
                <span>Don't have account yet? <a href="/signup">SignUp</a></span>
                <input type="submit" id="submit" value="Login" />
            </form>
        </div>
    );
}

export default LoginForm;