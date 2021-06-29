import React, { useState, useEffect } from "react";
import Header from "../../header/Header";
import SideBar from "../../sideBar/SideBar";
import CardPost from "../../Card";
import "./home.css";
import API from "../../../utils/API";
import {Row} from "reactstrap";

export default function Home(props) {
  const [posts, setPosts] = useState([]);
  const [post1, setPost1] = useState([]);
  const [post2, setPost2] = useState([]);

  useEffect(() => {
    API.getPostsByUser(props.user).then((response) => {
      console.log(response);
      setPosts(response.data[0].posts);
    });
    console.log(props.user);
  }, []);

  useEffect(() => {
    handlepostlimit();
  }, [posts]);

  const handlepostlimit = () => {
    const firstPosts = [];
    const secondPosts = [];
    posts.forEach((post, index) => {
      if (index <= 3) {
        firstPosts.push(post);
      } else if (index > 3 && index <= 7) {
        secondPosts.push(post);
      }
      setPost1(firstPosts);
      setPost2(secondPosts);
    });
  };
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
        <Row>
          {post1.map((post) => (
            <CardPost
              key={post._id}
              image={post.img}
              description={post.description}
              title={post.title}
              body={post.body.blocks[0].text}
            />
          ))}
        </Row>
        <Row>
          {post2.map((post) => (
            <CardPost
              key={post._id}
              image={post.img}
              description={post.description}
              title={post.title}
              body={post.body.blocks[0].text}
            />
          ))}
        </Row>

      </div>
      <SideBar />
    </>
  );
}
