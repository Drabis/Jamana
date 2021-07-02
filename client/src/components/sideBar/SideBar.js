import React from "react";
import "./sidebar.css";
// import Image from "../../assets/images/amani.jpg";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT US</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dolore
          saepe nisi minus vel atque itaque ab repellendus sequi sit ipsa.
        </p>
        <span className="sidebarTitle">CATEGORIES</span>
        <ul>
          <li className="sidebarListItem"> Life</li>
          <li className="sidebarListItem"> Culture</li>
          <li className="sidebarListItem"> Music</li>
          <li className="sidebarListItem"> Sport</li>
          <li className="sidebarListItem"> Food</li>
          <li className="sidebarListItem"> Social</li>
        </ul>
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sideIcon fab fa-facebook-square"></i>
          <i className="sideIcon fab fa-instagram-square"></i>
          <i className="sideIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
