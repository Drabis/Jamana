import React, { useState, useEffect } from "react";
import "./login.css";
import { Link, useHistory } from "react-router-dom";
import API from "../../../utils/API";

export default function SigninPage(props) {
  let history = useHistory();
  const [formInput, setFormInput] = useState({});
  // const [validation, setValidation] = useState({name:false, email: false});
  const [errorMessage, setErrorMessage] = useState(false);
  const [validator, setValidator] = useState({ email: false, name: false });

  const handleInputChange = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
    const targetName = e.target.name;
    switch (targetName) {
      case "email":
        const emailCheck = new RegExp(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        );
        if (emailCheck.test(e.target.value)) {
          setFormInput({ ...formInput, [e.target.name]: e.target.value });
          setValidator({ ...validator, email: false });
        } else {
          setValidator({ ...validator, email: true });
        }
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

<h5 className=" scroll-text"> WELCOME BACK, JAMANA IS READY FOR YOU TO SHARE YOUR RECENT EXPERIENCES 😊 </h5> 
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
