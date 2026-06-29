import React from "react";
import "./Signup.css";

function Signup(){
    return(
            <div className="container2">
                <h1>Create your account</h1>
                <form>
                    <input type="text" placeholder="Full Name"/>
                    <input type="Email"  placeholder="Email address"/>
                    <input type="number" placeholder="Phone Number"/>
                    <input type="password" placeholder="Password" required/>
                    <input type="password" placeholder="Confirm Password" required/>
                    <button type="submit">Sign up</button>
                    <a href="login">Already have an account? <span>Login</span></a>
                </form>
            </div>
    );
}
export default Signup;