import React from "react";
import "./Contact.css";

function Contact(){
    return(
        <div className="container">

            <form>
                <h1>Contact Us</h1>
                <p>We're here to Reach out anytime.</p>

                <div className="contacts">

                    <p><span>Email:</span> support@loanapp.com</p>
                    <p><span>Phone:</span> +1(555) 123-4567</p>
                    <p><span>Hours:</span> Mon-Fri 9AM-6PM EST</p>

                </div>

                <input type="text" placeholder="Your Name" required/>

                <input type="email"  placeholder="Your Email" required/>

                <textarea placeholder="Your Message" rows={6} required></textarea>

                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}
export default Contact;