import { convertToRaw } from "draft-js";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import RichEditor from "../../RichEditor";
import API from "../../../utils/API";
import "./style.css";


export default function Write(props) {
  let {postId} = useParams()
  const history = useHistory();
  const [blog, setBlog] = useState({});
  const [blogInfo, setBlogInfo] = useState({});
  const [parse, setParse] = useState({});

  useEffect(() => {
    if(postId) {
      API.getPostById(postId)
      .then(response => {
        console.log(response)
        const parsePost = JSON.parse(response.data.body)
        setParse(parsePost);
        setBlogInfo({ title: response.data.title, author: response.data.author})
      })
    }
    else {
      setParse({})
      setBlogInfo({})
    }
  },[postId])

  const handleInputChange = (e) => {
    setBlogInfo({ ...blogInfo, [e.target.name]: e.target.value });
  };
  const handlePostSubmit = () => {
    if (postId) {
      API.updateBlog(blog, blogInfo, postId)
      .then(() => {
        history.push("/")
      })
    }
    else {
      API.submitBlog(blog, blogInfo, props.user).then(() => {
        history.push("/");
      });
    }
  };

  const updateBlog = (input) => {
    const raw = JSON.stringify(convertToRaw(input));
    console.log(raw);
    setBlog(raw);
  };

  return (
    <div>
      <h2>TITLE</h2>
      <input type="text" onChange={handleInputChange} value={blogInfo.title || ""} name="title" />
      <h5>Author</h5>
      <input type="text" onChange={handleInputChange} value={blogInfo.author || ""} name="author" />
      <RichEditor blogInfo={blogInfo} post={parse} updateBlog={updateBlog} />
      <button onClick={handlePostSubmit} className="postBtn">
        POST
      </button>
    </div>
  );
}
