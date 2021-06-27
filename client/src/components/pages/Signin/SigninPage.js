import React, { useState } from "react";
import "./login.css";
import { Link, useHistory } from "react-router-dom";
import API from "../../../utils/API";

export default function SigninPage(props) {
  let history = useHistory()
  const [formInput, setFormInput] = useState({})
const handleInputChange = (e) => {
  setFormInput({...formInput, [e.target.name]: e.target.value})
  console.log(formInput)
}
const handleSignin = (e) => {
  e.preventDefault()
  API.signinUser(formInput).then(response => {
    console.log(response)
    if (response.status === 200) {
      props.handleUserSignin(response.data.user._id)
      history.push("/");
    }else{
      alert("Failed to delete blog.");
    }
    // history.push("/")
  })
}
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input
          name="email"
          onChange={handleInputChange}
          typetype="text"
          placeholder="Enter your email"
        />
        <label>Password</label>
        <input
          name="password"
          onChange={handleInputChange}
          type="password"
          placeholder="Enter your password"
        />
        <button onClick={handleSignin} className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButon">
        <Link className="link" to="/register">
          REGISTER
        </Link>
      </button>
    </div>
  );
}
