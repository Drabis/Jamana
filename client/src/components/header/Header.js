import React from "react";
import "./header.css";
import Image from "../../assets/images/header.jpg";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        {/* <span className="headerTitleSm">Country & Culture Blog</span> */}
        {/* <span className="headerTitleLg">Jamana</span> */}
      </div>
      <img className="headerImg" src={Image} alt="" />
    </div>
  );
}
