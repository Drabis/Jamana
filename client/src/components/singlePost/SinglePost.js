import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from '../../utils/API'
import draftToHtml from "draftjs-to-html";
import parse from "html-react-parser";

export default function SinglePost() {
  const { postId } = useParams()
  
  const [post, setPost] = useState({
    author: "",
    title: "",
    createdAt: ""
  })
  const [body, setBody] = useState("")

  const handleDelete = async () => {
    try {
      await axios.delete("post/" + postId)
      window.location.replace('/')
    }catch (err){}
  };

  useEffect(() => {
    const getPost = async () => {
      API.getPostById(postId)
      .then(res => {
        console.log(res)
        setPost(res.data)
      })
    };
    getPost();
  }, [postId]);

  useEffect(() => {
    if(post.author) {
      const parsedBody = draftToHtml(JSON.parse(post.body))
      setBody(parsedBody)
    }
  }, [post])

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {/* {post.photo && (
          <img className="singlePostImg" src={post.photo} alt="" />
        )} */}
        <h1 className="singlePostTitle">
          {post.title}
          <div>
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
          </div>
        </h1>
        <div className="singlePostInfo">
            <span className="Author">
            Author: <b>{post.author}</b>
            </span>
            <span className="singlePostDate">{new Date(post.createdAt).toDateString}</span>
        </div>
        <p className="singlePostDesc">{body ? parse(body) : ""}</p>
      </div>
    </div>
  );
}
