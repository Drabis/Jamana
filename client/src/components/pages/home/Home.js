import React, { useState, useEffect } from "react";
import Header from "../../header/Header";
import SideBar from "../../sideBar/SideBar";
import CardPost from "../../Card";
import "./home.css";
import API from "../../../utils/API";

export default function Home(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    API.getPostsByUser(props.user).then((response) => {
      console.log(response);
      setPosts(response.data[0].posts);
    });
    console.log(props.user);
  }, []);

  // const mapPosts = () => {
  //   posts.map((post) => {
  //     return (
  //       <CardPost
  //         image={post.img}
  //         subtitle={post.subtitle}
  //         title={post.title}
  //       />
  //     );
  //   });
  // };

  return (
    <>
      <Header />
      <div className="home">
        {/* {mapPosts()} */}
        {posts.map((post) => (
          <CardPost
            key={post._id}
            image={post.img}
            description={post.description}
            title={post.title}
            body={post.body}
          />
        ))}
        {/* <CardPost
          image="https://cdn.pixabay.com/photo/2021/01/28/18/21/beach-5958718_960_720.jpg"
          subtitle="I don't know yet"
          title="title"
        /> */}
      </div>
      <SideBar />
    </>
  );
}
