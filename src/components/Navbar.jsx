import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Nav(){
    return(
        <nav>
            <h1>LoanAptech</h1>
            <div className="nav-links">
                <Link to={"/"} className="Link">Home</Link>
                <Link className="Link">Loans</Link>
                <Link to={"/about"} className="Link">About</Link>
                <Link to={"/contact"} className="Link">Contact</Link>
                <Link to={"/login"} className="Link">Login</Link>
                <Link to={"/signup"} className="signup-btn">Signup</Link>
            </div>
        </nav>
    );
}
export default Nav;