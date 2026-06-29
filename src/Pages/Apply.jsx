import React from "react";
import "./Apply.css";

function Apply(){
    return(
        <div className="apply-container">
            <form>
                <h1>Apply for Loan</h1>
                <label for="name">Full Name</label>
                <input type="text" id="name" placeholder="John Doe"/>

                <label for="email">Email Address</label>
                <input type="Email"  id="email" placeholder="johndoe@gmail.com"/>

                <label for="loanamount">Loan Amount</label>
                <input type="number" placeholder="5000"/>

                <label for="tenure">Loan Tenure</label>
                <input type="text" id="tenure" placeholder="select loan tenure"/>

                <label for="purpose">Purpose of Loan</label>
                <textarea  id="purpose" placeholder="e.g, Home, Buisness expansion, Education...."></textarea>
                <button type="submiit">Submit Application</button>
            </form>
        </div>
    );
}
export default Apply;