import { convertToRaw } from "draft-js";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import RichEditor from "../../RichEditor";
import API from "../../../utils/API";
import Footer from "../../Footer/Footer";
import "./style.css";
import {
  Row,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";

export default function Write(props) {
  let { postId } = useParams();
  const history = useHistory();
  const [blog, setBlog] = useState({});
  const [blogInfo, setBlogInfo] = useState({});
  const [parse, setParse] = useState({});
  const [categorySelection, setCategorySelection] = useState();

  useEffect(() => {
    if (postId) {
      API.getPostById(postId).then((response) => {
        console.log(response);
        const parsePost = JSON.parse(response.data.body);
        setParse(parsePost);
        setBlogInfo({
          title: response.data.title,
          author: response.data.author,
        });
      });
    } else {
      setParse({});
      setBlogInfo({});
    }
  }, [postId]);

  const handleInputChange = (e) => {
    setBlogInfo({ ...blogInfo, [e.target.name]: e.target.value });
  };
  const handlePostSubmit = () => {
    if (postId) {
      console.log(`testing ${postId}`);
      API.updateBlog(blog, blogInfo, categorySelection, postId).then(() => {
        history.push("/");
      });
    } else {
      API.submitBlog(blog, blogInfo, categorySelection, props.user).then(() => {
        history.push("/");
      });
    }
  };

  const updateBlog = (input) => {
    const raw = JSON.stringify(convertToRaw(input));
    setBlog(raw);
  };
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const handleCatselection = (e) => {
    setCategorySelection(e.target.textContent);
  };

  return (
    <Row>
      <div className="write">
        <h2 className="title">Title</h2>
        <input
          type="text"
          onChange={handleInputChange}
          value={blogInfo.title || ""}
          name="title"
        />
        <br />
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret>Dropdown</DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={handleCatselection}>Music</DropdownItem>
            <DropdownItem onClick={handleCatselection}>Food</DropdownItem>
            <DropdownItem onClick={handleCatselection}>Culture</DropdownItem>
            <DropdownItem onClick={handleCatselection}>Sport</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <p>{categorySelection}</p>
        <h5>Author</h5>
        <input
          type="text"
          onChange={handleInputChange}
          value={blogInfo.author || ""}
          name="author"
        />
        <RichEditor blogInfo={blogInfo} post={parse} updateBlog={updateBlog} />
        <button onClick={handlePostSubmit} className="postBtn">
          POST
        </button>
      </div>
    </Row>
  );
}
