import React from 'react';
import "./login.css";

export default function SigninPage() {
    return (
      <div className="login">
          <span className="loginTitle">Login</span>
        <form className="loginForm">
          <label>Email</label>
          <input typetype="text" placeholder="Enter your email" />
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
          <button className="loginButton">Login</button>
        </form>
        <button className="loginRegisterButon">Register</button>
      </div>
    );
}
