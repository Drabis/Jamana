import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../utils/API";
import draftToHtml from "draftjs-to-html";
import parse from "html-react-parser";
import "./singlePost.css";

export default function SinglePost(props) {
  const { postId } = useParams();

  const [post, setPost] = useState({
    title: "",
    author: "",
    description: "",
  });
  console.log(`initial ${post}`);
  const [body, setBody] = useState("");
  // const [posts, setPosts] = useState([]);

  ///////////

  // const handleDelete = (id) => {
  //   console.log(`this is new ${post}`);
  //   const newPost = posts.filter((post) => post._id !== id);
  //   setPosts(newPost);
  // };

    const handleDelete = async () => {
      try {
        await axios.delete("/api/posts/" + postId);

        props.handleDelete(props.id);
      } catch (err) {}
    };
  ///////////

  useEffect(() => {
    const getPost = async () => {
      API.getPostById(postId).then((res) => {
        console.log(res);
        setPost(res.data);
      });
    };
    getPost();
  }, [postId]);

  useEffect(() => {
    if (post.author) {
      const parsedBody = draftToHtml(JSON.parse(post.body));
      setBody(parsedBody);
    }
  }, [post]);

  return (
    <div className="singlePost">
      <h1 className="singlePostTitle">{post.title}</h1>
      <div className="singlePostInfo">
        <span className="Author">
          Author: <b>{post.author}</b>
        </span>
      </div>
      <p className="singlePostDesc">{body ? parse(body) : ""}</p>
      <div>
        <a href={"/write/" + postId}>
          <i className="singlePostIcon far fa-edit"></i>
        </a>

        <i
          className="singlePostIcon far fa-trash-alt"
          onClick={handleDelete}
        ></i>
      </div>
    </div>
  );
}
