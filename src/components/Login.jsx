import React from "react";
import "./Login.css"

function Login() {
    return (
        <div className="login-container">
            <h1>Welcome Back</h1>
            <form action="">
                <input type="Email" placeholder="useracc@gmail.com"/>
                <input type="Password" placeholder="password"/>
                <button type="submit">Login</button>
                <a href="signup">Don't have an account? <span>Sign up</span></a>
            </form>
        </div>
    );
}
export default Login;