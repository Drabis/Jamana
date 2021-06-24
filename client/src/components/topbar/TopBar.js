import React from "react";
import "./topBar.css";
import { Link } from "react-router-dom";
import Image from "../../assets/images/ivana.jpg";

export default function TopBar() {
  const user = false
  return (
    <div className="top">
      <div className="topLeft">
        <h1>Jamana</h1>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight"></div>
      <img className="topImg" src={Image} alt="" />
      <i className="topSearchIcon fas fa-search"></i>
    </div>
  );
}
