import React, {useState} from "react";
import {useNavigate, Link} from "react-router-dom";
import "./Signup.css";

const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        Email: "",
        phone: "",
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!formData.name || !formData.email || !formData.phone || !formData.passowrd || !formData.confirmPassword){
            setError("please fill in all feilds"):
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError("passwords do not match");
            return;
        }



        setLoading(true);

        try {
            const response = await fetch("https://loanaptech-ijz6.onrender.com/api/    auth/signup");
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include"
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    passowrd: formData.passowrd
                })    
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Registration failed");
            }

            alert("Registration sucessfull! please login.");
            navigate("/login");
        } catch(err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
};

function Signup(){
    return(
            <div className="container2">
                <h1>Create your account</h1>
                <form>
                    <input type="text" placeholder="Full Name" required/>
                    <input type="Email"  placeholder="Email address" required/>
                    <input type="number" placeholder="Phone Number" required/>
                    <input type="password" placeholder="Password" required/>
                    <input type="password" placeholder="Confirm Password" required/>
                    <button type="submit">Sign up</button>
                    <a href="login">Already have an account? <span>Login</span></a>
                </form>
            </div>
    );
}
export default Signup;