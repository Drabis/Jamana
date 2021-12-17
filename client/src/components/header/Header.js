import React from "react";
import "./header.css";
import Image from "../../assets/images/header.jpg";

export default function Header() {
  return (
    <div className="header"> 
      <img className="headerImg" src={Image} alt="" />
    </div>
  );
}
