import React from "react";
import "./topBar.css";
import Image from "../../assets/images/ivana.jpg";

export default function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
       <h1>Jamana</h1>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight"></div>
      <img className="topImg" src={Image} alt="" />
      <i className="topSearchIcon fas fa-search"></i>
    </div>
  );
}
