import React from "react";
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
                    <a href="#">Home</a>
                    <a href="#">Loan Products</a>
                    <a href="#">Apply Now</a>
                    <a href="#">About Us</a>
                </div>   

                <div className="footer-box">
                <h2>Support</h2>
                <a href="#">Contact Us</a>
                <a href="#">FAQ</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                </div>

                <div className="footer-box">
                <h2>Get in Touch</h2>
                <a href="#">support@loanaptech.com</a>
                <a href="#">+1 (555) 123-456</a>
                <a href="#">Mon-Fri: 9AM-6PM EST</a>
                </div>
            </div>
            <div className="copyright">
                <p>&copy; {year} LoanAptech. All rights reserved </p>
            </div>
       </footer>
    );

    
}
export default Footer;