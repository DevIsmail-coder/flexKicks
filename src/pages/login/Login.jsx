import React from "react";
import './login.css'
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate()
    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <p>Enter Login details to get access</p>
                <label htmlFor="username"> Username Or Email Address</label>
                <input 
                    type="text" 
                    placeholder="Username / Email address" 
                    className="login-input" 
                />
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    placeholder="Enter Password" 
                    className="login-input" 
                />
                <div className="login-options">
                    <label>
                        <input type="checkbox"  /> Keep Me Logged In
                    </label>
                    <a href="#" className="forgot-password">Forgot Password?</a>
                </div>
               <div className="login-btn">
               <p>
                    Don’t have an account? <span className="signup-link" onClick={() => navigate("/signuppage")}>Sign Up</span> here
                </p>
               <button className="login-button">Login</button>
               
               </div>
               
            </div>
        </div>
    );
};

export default Login;
