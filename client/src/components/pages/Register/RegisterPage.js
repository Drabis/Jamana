import React, {useEffect, useState } from "react";
import "./register.css";
import { Link, useHistory } from "react-router-dom";
import API from "../../../utils/API";

export default function SigninPage(props) {
  let history = useHistory();
  const [formInput, setFormInput] = useState({});
  const [validator, setValidator] = useState({ email: false, name: false });

  const handleInputChange = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
    const targetName = e.target.name.value;
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

  const handleRegister = (e) => {
    e.preventDefault();
    API.registerUser(formInput).then((response) => {
      if (response.status === 200) {
        props.handleUserSignin();
        history.push("/");
      }
    });
  };

  return (
  
    <div className="register">

    <h5 className=" scroll-text"> WELCOME TO JAMANA WHERE THE HISTORY AND THE BEAUTY OF A CONTINENT MEET. READY TO SHARE YOUR EXPERIENCES?</h5> 

      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input
          name="username"
          onChange={handleInputChange}
          type="text"
          placeholder="Enter your username"
        />
        <label>Email</label>
        <input
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="Enter your email"
        />
        {validator.email && <div className="redText">Enter a valid email</div>}
        <label>Password</label>
        <input
          name="password"
          onChange={handleInputChange}
          type="password"
          placeholder="Enter your password"
        />
        {validator.password && <div>Enter a valid password</div>}

        <button onClick={handleRegister} className="registerButton">
          register
        </button>
      </form>
      <button className="registerLoginButon">
        <Link className="link" to="/signin">
          LOGIN
        </Link>
      </button>
    </div>
  );
}
