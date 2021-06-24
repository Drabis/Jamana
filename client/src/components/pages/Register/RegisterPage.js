import React from "react";
import "./register.css";

export default function SigninPage() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input typetype="text" placeholder="Enter your username" />
        <label>Email</label>
        <input typetype="text" placeholder="Enter your email" />
        <label>Password</label>
        <input type="password" placeholder="Enter your password" />
        <button className="registerButton">register</button>
      </form>
      <button className="registerLoginButon">Login</button>
    </div>
  );
}
