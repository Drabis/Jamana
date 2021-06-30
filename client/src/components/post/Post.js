import React from "react";
import { Link } from "react-router-dom";
import "./post.css";

export default function Post({post}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://cdn.pixabay.com/photo/2021/06/22/03/57/poppies-6355042_1280.jpg"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((category) => (
            <span className="postcat">{category.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`}></Link>
        <span className="postTitle">{post.title}</span>
        <hr />
        <span className="postDate">
          {new Date(post.createAt).toDateString()}
        </span>
      </div>
      <p className="PostDesc">{post.desc}</p>
    </div>
  );
}
