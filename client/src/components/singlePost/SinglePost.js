import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import API from "../../utils/API";
import draftToHtml from "draftjs-to-html";
import parse from "html-react-parser";
import "./singlePost.css";

const imageMap = {
  Music: "/assets/images/music/drums.jpg",
  Food: "/assets/images/food/couscous.jpeg",
  Sport: "/assets/images/sport/football.jpeg",
  Culture: "/assets/images/culture/yash.jpg",
  Life: "/assets/images/life/amani.jpg",
  City: "/assets/images/city/marakesh.jpeg",
};

export default function SinglePost() {
  const { postId } = useParams();
  const history = useHistory();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await API.getPostById(postId);
        setPost(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPost();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/posts/${postId}`);
      history.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  const getImage = () => {
    const img = imageMap[post?.category] || "";
    return process.env.PUBLIC_URL + img;
  };

  const getBody = () => {
    if (!post?.body) return "";
    return parse(draftToHtml(JSON.parse(post.body)));
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div className="singlePost">
      <h1 className="singlePostTitle">{post.title}</h1>
      <img src={getImage()} alt="" />
      <div className="singlePostInfo">
        <span className="Author">
          Author: <b>{post.author}</b>
        </span>
      </div>
      <p className="singlePostDesc">{getBody()}</p>
      <div>
        <a className="anchor" href={`/write/${postId}`}>
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
