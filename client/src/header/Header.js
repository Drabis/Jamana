import React from "react";
import "./header.css";
import Image from "../assets/images/header.jpg";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Country & Culture</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg" src={Image} alt="" />
    </div>
  );
}
