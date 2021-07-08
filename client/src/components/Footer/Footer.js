import React from "react";
import "./styles.css";
// import Image from "../../assets/images/amani.jpg";

export default function Footer() {
  return (
    <div className="footer ">
      <div className="footerItem">
        <span className="footerTitle">ABOUT US</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dolore
          saepe nisi minus vel atque itaque ab repellendus sequi sit ipsa.
        </p>
        <span className="footerTitle">CATEGORIES</span>
        <ul>
          <li className="footerListItem"> Life</li>
          <li className="footerListItem"> Culture</li>
          <li className="footerListItem"> Music</li>
          <li className="footerListItem"> Sport</li>
          <li className="footerListItem"> Food</li>
          <li className="footerListItem"> Social</li>
        </ul>
        <span className="footerTitle">FOLLOW US</span>
        <div className="footerSocial">
          <i className="sideIcon fab fa-facebook-square"></i>
          <i className="sideIcon fab fa-instagram-square"></i>
          <i className="sideIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
