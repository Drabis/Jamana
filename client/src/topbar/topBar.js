import React from "react";
import "./topBar.css";

export default function topBar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
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
      <img
        className="topImg"
        src="https://unsplash.com/photos/_7LbC5J-jw4"
        alt=""
      />
      <i className="topSearchIcon fas fa-search"></i>
    </div>
  );
}