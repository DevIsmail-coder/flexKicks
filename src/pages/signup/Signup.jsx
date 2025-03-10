import React from "react";
import './signUp.css'

const Signup = () => {
    return (
        <div className="SignUp-container">
            <div className="SignUp-box">
                <h2>Sign Up</h2>
                <p>Create you account to get full access</p>
                <label htmlFor="fullname">Full Name</label>
                <input 
                    type="text" 
                    placeholder="Enter full name" 
                    className="SignUp-input" 
                />
                 <label htmlFor="email">Email Address</label>
                <input 
                    type="email" 
                    placeholder="Enter email address" 
                    className="SignUp-input" 
                />
                 <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    placeholder="Enter Password" 
                    className="SignUp-input" 
                />
                 <label htmlFor="confirm password"> Confirm Password</label>
                <input 
                    type="password" 
                    placeholder="Confirm Password" 
                    className="SignUp-input" 
                />
               <div className="SignUp-btn"> 
                <p>
                    Already have an account? <a href="/Login" className="signup-link">Login</a> here
                </p>
                <button className="SignUp-button">Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;
