import React from "react";
import "./topBar.css";
import { Link } from "react-router-dom";
import Image from "../../assets/images/male.png";

export default function TopBar(props) {
  
  return (
    <div className="top overflow-hidden">
      <div className="topLeft">
        <h1>Jamana</h1>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
           {props.user ? <Link className="link" to="/">
              HOME
            </Link> : null }
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
            {props.user ? <Link className="link" to="/write">
              WRITE
            </Link> : null }
          </li>
          {props.user ? <li onClick={props.logout} className="topListItem">LOGOUT</li> : null }
        </ul>
      </div>
      <div className="topRight">
        {props.user ? (
          <img className="topImg" src={Image} alt="" />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/signin">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      </div>

      <i className="topSearchIcon fas fa-search"></i>
    </div>
  );
}
