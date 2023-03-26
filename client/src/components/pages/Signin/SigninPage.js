import React, { useState } from "react";
import "./login.css";
import { Link, useHistory } from "react-router-dom";
import API from "../../../utils/API";

export default function SigninPage(props) {
  const history = useHistory();
  const [formInput, setFormInput] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [validator, setValidator] = useState({ email: false, name: false });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
    switch (name) {
      case "email":
        const emailCheck = new RegExp(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        );
        setValidator({ ...validator, email: !emailCheck.test(value) });
        break;
      default:
        return;
    }
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
      <h5 className="scroll-text">
        WELCOME BACK, JAMANA IS READY FOR YOU TO SHARE YOUR RECENT EXPERIENCES
        😊
      </h5>
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="Enter your email"
        />
        {errorMessage && <div className="error">{errorMessage}</div>}
        {validator.email && (
          <div className="error">Please enter a valid email address</div>
        )}
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
