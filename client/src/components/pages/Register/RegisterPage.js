import React, { useEffect, useState } from "react";
import "./register.css";
import { Link, useHistory } from "react-router-dom";
import API from "../../../utils/API";

export default function RegisterPage(props) {
  let history = useHistory();
  const [formInput, setFormInput] = useState({});
  const [validator, setValidator] = useState({ email: false, password: false });

  const handleInputChange = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
    const targetName = e.target.name;
    switch (targetName) {
      case "email":
        const emailCheck = new RegExp(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        );
        if (emailCheck.test(e.target.value)) {
          setValidator({ ...validator, email: false });
        } else {
          setValidator({ ...validator, email: true });
        }
        break;
      case "password":
        const passwordCheck = new RegExp(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        );
        if (passwordCheck.test(e.target.value)) {
          setValidator({ ...validator, password: false });
        } else {
          setValidator({ ...validator, password: true });
        }
        break;
      default:
        return;
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    API.registerUser(formInput)
      .then((response) => {
        if (response.status === 200) {
          props.handleUserSignin();
          history.push("/");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="register">
      <h5 className="scroll-text">
        WELCOME TO JAMANA WHERE THE HISTORY AND THE BEAUTY OF A CONTINENT MEET.
        READY TO SHARE YOUR EXPERIENCES?
      </h5>

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
        {validator.password && (
          <div className="redText">
            Password must contain at least 8 characters, one uppercase letter,
            one lowercase letter, one number, and one special character.
          </div>
        )}

        <button onClick={handleRegister} className="registerButton">
          register
        </button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/signin">
          LOGIN
        </Link>
      </button>
    </div>
  );
}
