import React, { useState, useEffect } from "react";
import "./login.css";
import { Link, useHistory } from "react-router-dom";
import API from "../../../utils/API";

export default function SigninPage(props) {
  let history = useHistory();
  const [formInput, setFormInput] = useState({});
  // const [validation, setValidation] = useState({name:false, email: false});
  const [errorMessage, setErrorMessage] = useState(false);

  const handleInputChange = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };
  const handleSignin = (e) => {
    e.preventDefault();
    API.signinUser(formInput)
      .then((response) => {
        if (response.status === 200) {
          props.handleUserSignin(response.data.user._id);
          history.push("/");
        }
      })
      .catch((err) => {
        setErrorMessage("Incorrect email or password, please try again");
      });
  };

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
        {errorMessage && <div className="error">{errorMessage}</div>}
        <label>Password</label>
        <input
          name="password"
          onChange={handleInputChange}
          type="password"
          placeholder="Enter your password"
        />
        <button onClick={handleSignin} className="loginButton">
          Login
        </button>
      </form>
      <button className="loginRegisterButon">
        <Link className="link" to="/register">
          REGISTER
        </Link>
      </button>
    </div>
  );
}
