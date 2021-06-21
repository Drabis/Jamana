import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm"></span>
        <span className="headerTitleLg"></span>
      </div>
      <img
        className="headerImg"
        src={require("https://pixabay.com/photos/sunset-meadow-grass-sunlight-6344387")}
        alt=""
      />
    </div>
  );
}
