import React, {useState} from "react";
import "./register.css";
import { Link, useHistory } from "react-router-dom";
import API from "../../../utils/API";


export default function SigninPage(props) {
  let history = useHistory()
  const [formInput, setFormInput] = useState({})
  
const handleInputChange = (e) => {
  setFormInput({...formInput, [e.target.name]: e.target.value})
  console.log(formInput)
}
const handleRegister = (e) => {
  e.preventDefault()
  API.registerUser(formInput)
    .then((response) => {
      if (response.status === 200) {
        props.handleUserSignin();
        history.push("/");
      }
    })
}

  return (
    <div className="register">
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
        <label>Password</label>
        <input
          name="password"
          onChange={handleInputChange}
          type="password"
          placeholder="Enter your password"
        />
        <button onClick={handleRegister} className="registerButton">register</button>
      </form>
      <button className="registerLoginButon">
        <Link className="link" to="/signin">
          LOGIN
        </Link>
      </button>
    </div>
  );
}
