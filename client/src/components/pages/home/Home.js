import React, { useState, useEffect } from "react";
import SideBar from "../../Footer/Footer";
import CardPost from "../../Card";
import "./home.css";
import API from "../../../utils/API";
import { Row } from "reactstrap";
import draftToHtml from "draftjs-to-html";
import Slider from "../../slider/Slider";

export default function Home(props) {
  const [posts, setPosts] = useState([]);
  const [post1, setPost1] = useState([]);

  // DELETE POST
  const handleDelete = (id) => {
    const newPost = posts.filter((post) => post._id !== id);
    setPosts(newPost);
  };
// Get user post on reload
  useEffect(() => {
    API.getPostsByUser(props.user).then((response) => {
      setPosts(response.data[0].posts);
    });
  }, []);
  
  useEffect(() => {
    handlepostlimit();
  }, [posts]);

  const handlepostlimit = () => {
    posts.sort((a, b) => {
      if (a._id > b._id) return -1;
      if (a._id < b._id) return 1;
      return 0;
    });
    // use array.slice method to get first 8 posts
    const postList = posts.slice(0, 8);

    postList.forEach((post) => {
      if (post.body) {
        post.html = draftToHtml(JSON.parse(post.body));
      }
    });
    setPost1(postList); 
  };

  return (
    <>
      <Slider />
      <div className="home">
        <Row>
          {post1.map((post) => (
            <CardPost
              key={post._id}
              id={post._id}
              category={post.category}
              author={post.author}
              html={post.html}
              title={post.title}
              handleDelete={handleDelete}
            />
          ))}
        </Row>
        <SideBar />
      </div>
    </>
  );
}
