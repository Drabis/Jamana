import React, { useState, useEffect } from "react";
import Header from "../../header/Header";
import SideBar from "../../sideBar/SideBar";
import CardPost from "../../Card";
import "./home.css";
import API from "../../../utils/API";
import {Row} from "reactstrap";
import { convertFromRaw, convertToRaw } from "draft-js";
import draftToHtml from 'draftjs-to-html'

export default function Home(props) {
  const [posts, setPosts] = useState([]);
  const [post1, setPost1] = useState([]);
  const [post2, setPost2] = useState([]);

  useEffect(() => {
    API.getPostsByUser(props.user).then((response) => {
      setPosts(response.data[0].posts);
    });
  }, []);

  useEffect(() => {
    handlepostlimit();
  }, [posts]);

  const handlepostlimit = () => {
    const firstPosts = [];
    const secondPosts = [];
    // posts.forEach((post, index) => {
    //   if (index <= 3) {
    //     firstPosts.push(post);
    //   } else if (index > 3 && index <= 7) {
    //     secondPosts.push(post);
    //   }
      posts.sort((a, b) => {
        if ( a._id > b._id) return -1
        if ( a._id < b._id) return 1
        return 0
      })
      // use array.slice method to get first 8 posts
      const postList = posts.slice(0, 8);

      postList.forEach(post => {
        if (post.body) {
          post.body = draftToHtml(JSON.parse(post.body))
        }
        // if (post.body) post.body = convertFromRaw(post.body)
      })
      setPost1(postList);
      // setPost2(secondPosts);
    ;
  };

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
              // description={post.body ? post.body.getPlainText() : ""}
              description={post.body}
              title={post.title}
              // body={post.body.blocks[0].text}
            />
          ))}
        </Row>
        {/* <Row>
          {post2.map((post) => (
            <CardPost
              key={post._id}
              image={post.img}
              description={post.description}
              title={post.title}
              body={post.body.blocks[0].text}
            />
          ))}
        </Row> */}
        {/* <CardPost
          image="https://cdn.pixabay.com/photo/2021/01/28/18/21/beach-5958718_960_720.jpg"
          subtitle="I don't know yet"
          title="title"
        /> */}
        <SideBar />
      </div>
      
    </>
  );
}
