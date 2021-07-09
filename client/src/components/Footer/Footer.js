import React from "react";
import "./styles.css";
// import Image from "../../assets/images/amani.jpg";

export default function Footer() {
  return (
    <div className="footer ">
      <div className="footerItem">
        <span className="footerTitle">ABOUT US</span>
        <p>
          Your favorite Blog that allow you to share your experiences of Africa.
        </p>
        <span className="footerTitle">CATEGORIES</span>
        <ul>
          <li className="footerListItem"> Life</li>
          <li className="footerListItem"> Culture</li>
          <li className="footerListItem"> Music</li>
          <li className="footerListItem"> Sport</li>
          <li className="footerListItem"> Food</li>
          <li className="footerListItem"> Places</li>
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
