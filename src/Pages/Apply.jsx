import React from "react";
import "./Apply.css";

function Apply(){
    return(
        <div className="apply-container">
            <form>
                <h1>Apply for Loan</h1>
                <label for="name">Full Name</label>
                <input type="text" id="name" placeholder="John Doe" required/>

                <br/>

                <label for="email">Email Address</label>
                <input type="Email"  id="email" placeholder="johndoe@gmail.com" required/>

                <br/>

                <label for="loanamount">Loan Amount</label>
                <input type="text" placeholder="5000" required/>

                <br/>

                <label for="tenure">Loan Tenure</label>
                {/* <input type="text" id="tenure" placeholder="select loan tenure" required/> */}
                <select name="loan-tenure" id="tenure" required>
                    <option value="1">1 Month</option>
                    <option value="2">2 Months</option>
                    <option value="3">3 Months</option>
                    <option value="6">6 Months</option>
                </select>

                <br/>

                <label for="purpose">Purpose of Loan</label>
                <textarea  id="purpose" placeholder="e.g, Home, Buisness expansion, Education...."></textarea>

                

                <button type="submiit">Submit Application</button>
            </form>
        </div>
    );
}
export default Apply;