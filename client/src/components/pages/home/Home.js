import React from "react";
import Header from "../../header/Header";
import SideBar from "../../sideBar/SideBar";
// import Posts from "../../posts/Posts";
import CardPost from "../../Card";
import "./home.css";

export default function Home() {
  //state here
  return (
    <>
      <Header />
      <div className="home">
        <CardPost
          image="https://cdn.pixabay.com/photo/2021/01/28/18/21/beach-5958718_960_720.jpg"
          subtitle="I don't know yet"
          title="title"
        />
        <SideBar />
        {/* <Posts /> */}
      </div>
    </>
  );
}
