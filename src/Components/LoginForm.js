import React from "react";
import './LoginForm.css';


function LoginForm() {
    return (
        <div className="login-form">
            <form method="post" action="/login">
                <input id="userName" name="userName" type="text" placeholder="User Name"/>
                <input id="password" name="password" type="password" placeholder="Password" required />
                <a href="/home">Don't have account yet?</a>
                <input type="submit" id="submit" value="Login" />
            </form>
        </div>
    );
}

export default LoginForm;