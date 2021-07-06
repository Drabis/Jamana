import { convertToRaw } from "draft-js";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import RichEditor from "../../RichEditor";
import API from "../../../utils/API";
import "./style.css";

export default function Write(props) {
  const history = useHistory();
  const [blog, setBlog] = useState({});
  const [blogInfo, setBlogInfo] = useState({});

  const handleInputChange = (e) => {
    setBlogInfo({ ...blogInfo, [e.target.name]: e.target.value });
  };
  const handlePostSubmit = () => {
    API.submitBlog(blog, blogInfo, props.user).then(() => {
      history.push("/");
    });
  };

  const updateBlog = (input) => {
    const raw = JSON.stringify(convertToRaw(input));
    console.log(raw);
    setBlog(raw);
  };

  return (
    <div>
      <h2>TITLE</h2>
      <input type="text" onChange={handleInputChange} name="title" />
      <h5>Author</h5>
      <input type="text" onChange={handleInputChange} name="author" />
      <RichEditor updateBlog={updateBlog} />
      <button onClick={handlePostSubmit} className="postBtn">
        POST
      </button>
    </div>
  );
}
