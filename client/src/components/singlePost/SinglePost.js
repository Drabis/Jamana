import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({})

  const handleDelete = async () => {
    try {
      await axios.delete("post/" + path)
      window.location.replace('/')
    }catch (err){}
  };

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data)
    };
    getPost();
  }, [path]);
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img className="singlePostImg" src={post.photo} alt="" />
        )}
        <h1 className="singlePostTitle">
          {post.title}
          <div>
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
          </div>
        </h1>
        <div className="singlePostInfo">
            <span className="Author">
            Author: <b>{post.username}</b>
            </span>
            <span className="singlePostDate">{new Date(post.createdAt).toDateString}</span>
        </div>
        <p className="singlePostDesc">{post.desc}</p>
      </div>
    </div>
  );
}