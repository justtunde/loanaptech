import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer(){
    const year = new Date().getFullYear()
    return(
       <footer>
            <div className="footer-grid">
                <div className="footer-box">
                    <h1>LoanAptech</h1>
                    <p>Your trusted partner for fast, transparent <br /> and affordable loan solutions.</p>
                </div>

                <div className="footer-box">
                    <h2>Quick Links</h2>
                    <Link to={"/"} className="footer-link">Home</Link>
                    <Link className="footer-link">Loan Products</Link>
                    <Link to={"/apply"} className="footer-link">Apply Now</Link>
                    <Link to={"/about"} className="footer-link">About Us</Link>
                </div>   

                <div className="footer-box">
                    <h2>Support</h2>
                    <Link to={"/contact"} className="footer-link">Contact Us</Link>
                    <Link className="footer-link">FAQ</Link>
                    <Link className="footer-link">Privacy Policy</Link>
                    <Link className="footer-link">Terms of Service</Link>
                </div>

                <div className="footer-box">
                    <h2>Get in Touch</h2>
                    <Link className="footer-link">support@loanaptech.com</Link>
                    <Link className="footer-link">+1 (555) 123-456</Link>
                    <Link className="footer-link">Mon-Fri: 9AM-6PM EST</Link>
                </div>
            </div>
            <div className="copyright">
                <p>&copy; {year} LoanAptech. All rights reserved </p>
            </div>
       </footer>
    );

    
}
export default Footer;