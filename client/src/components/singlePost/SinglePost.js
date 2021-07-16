import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import API from "../../utils/API";
import draftToHtml from "draftjs-to-html";
import parse from "html-react-parser";
import "./singlePost.css";

export default function SinglePost(props) {
  const { postId } = useParams();
  const history = useHistory();
  const [post, setPost] = useState({
    title: "",
    author: "",
    description: "",
  });
  const [body, setBody] = useState("");

  const handleDelete = async () => {
    try {
      await axios.delete("/api/posts/" + postId);

      history.push("/");
    } catch (err) {}
  };

  useEffect(() => {
    const getPost = async () => {
      API.getPostById(postId).then((res) => {
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

  const getImage = () => {
    // switch statement to return image based on category
    let img;
    switch (post.category) {
      case "Music":
        img = process.env.PUBLIC_URL + "/assets/images/music/drums.jpg";
        break;
      case "Food":
        img = process.env.PUBLIC_URL + "/assets/images/food/couscous.jpeg";
        break;
      case "Sport":
        img = process.env.PUBLIC_URL + "/assets/images/sport/football.jpeg";
        break;
      case "Life":
        img = process.env.PUBLIC_URL + "/assets/images/culture/yash.jpg";
        break;
      case "Culture":
        img = process.env.PUBLIC_URL + "/assets/images/life/amani.jpg";
        break;
      case "City":
        img = process.env.PUBLIC_URL + "/assets/images/city/marakesh.jpeg";
      default:
    }

    return img;
  };

  return (
    <div className="singlePost">
      <h1 className="singlePostTitle">{post.title}</h1>

      {/* POPULATE THE IMAGE HERE */}
      <img src={getImage()} alt="" />

      <div className="singlePostInfo">
        <span className="Author">
          Author: <b>{post.author}</b>
        </span>
      </div>
      <p className="singlePostDesc">{body ? parse(body) : ""}</p>
      <div>
        <a className="anchor" href={"/write/" + postId}>
          <i className="singlePostIcon far fa-edit"></i>
        </a>

        <i
          className="singleDelPostIcon far fa-trash-alt"
          onClick={handleDelete}
        ></i>
      </div>
    </div>
  );
}
