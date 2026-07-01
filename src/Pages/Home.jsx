import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";    



function Home(){
    return(
        <div className="top">
            <h1>Welcome to LoanAptech</h1>
            <p>Get personal loans up to $50,000 with low interest rates and flexible <br/> repayment options.</p>

            <Link to={"/apply"} className="apply-btn">Apply Now, It's Free</Link>
           

            <div className="home-cards">
                <div className="cardss">
                    <h2>Lighning <br/> Fast</h2>
                    <h3>Lightning Fast <br/> Approval</h3>
                    <p>Get decisions in under 10 minutes</p>
                </div>

                <div className="cardss">
                    <h2>No <br/> Paperwork</h2>
                    <h3>No Paperwork <br/> Required</h3>
                    <p>100% digital & hassle-free process</p>
                </div>

                <div className="cardss">
                    <h2>Best <br/> Rates</h2>
                    <h3>Lowest Interest <br/> Rates</h3>
                    <p>starting from just 8.99% p.a.</p>
                </div>
            </div>

            <div className="status">
                <p>Already applied?</p>
                <Link className="status-link">Check loan status .</Link>
                <Link className="status-link">GO to Dashboard</Link>
            </div>
        </div>
        
    );
}
export default Home;