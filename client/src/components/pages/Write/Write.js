import { convertToRaw } from "draft-js";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import RichEditor from "../../RichEditor";
import API from "../../../utils/API";
import "./style.css";

export default function Write(props) {
  const history = useHistory();
  const [blog, setBlog] = useState({});
  const [blogInfo, setBlogInfo] = useState({});

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    API.blogCategory().then((blogCategory) =>{
      console.log(blogCategory)
    
      setCategories(blogCategory.data);
    });
   
  }, []);

  const handleInputChange = (e) => {
    setBlogInfo({ ...blogInfo, [e.target.name]: e.target.value });
  };
  const handlePostSubmit = () => {
    // const post = convertToRaw(blog);
    // console.log(post);
    API.submitBlog(blog, blogInfo, props.user).then(() => {
      history.push("/");
    });
  };

  const updateBlog = (input) => {
    const raw = JSON.stringify(convertToRaw(input))
    console.log(raw)
    setBlog(raw);
  };

  return (
    <div>
      <h2>TITLE</h2>
      <input type="text" onChange={handleInputChange} name="title" />
      <h5>DESCRIPTION</h5>
      <select id="categories" name="categories" size="1">
        {categories.map((category) => (<option name="categories" value={category.name}>{category.name}</option>)

      )}
      </select>

      <input type="text" onChange={handleInputChange} name="description" />
      <RichEditor updateBlog={updateBlog} />
      <button onClick={handlePostSubmit} className="postBtn">
        POST
      </button>
    </div>
  );
}
