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

// Define Write component
export default function Write(props) {
  // Get post ID from URL parameter and initialize necessary state variables
  let { postId } = useParams();
  const history = useHistory();
  const [blog, setBlog] = useState({});
  const [blogInfo, setBlogInfo] = useState({});
  const [parse, setParse] = useState({});
  const [categorySelection, setCategorySelection] = useState();

  // Fetch post data if editing an existing post, otherwise reset state variables
  useEffect(() => {
    if (postId) {
      API.getPostById(postId).then((response) => {
        const parsePost = JSON.parse(response.data.body);
        setParse(parsePost);
        setBlogInfo({
          title: response.data.title,
          author: response.data.author,
        });
        setCategorySelection(response.data.categ);
      });
    } else {
      setParse({});
      setBlogInfo({});
    }
  }, [postId]);

  // Handle changes to input fields by updating the corresponding state variables
  const handleInputChange = (e) => {
    setBlogInfo({ ...blogInfo, [e.target.name]: e.target.value });
  };

  // Handle form submission by making an API call to either create or update the blog post, then redirect to homepage
  const handlePostSubmit = () => {
    if (postId) {
      API.updateBlog(blog, blogInfo, categorySelection, postId).then(() => {
        history.push("/");
      });
    } else {
      API.submitBlog(blog, blogInfo, categorySelection, props.user).then(() => {
        history.push("/");
      });
    }
  };

  // Convert RichEditor content to raw JSON and update blog state variable
  const updateBlog = (input) => {
    const raw = JSON.stringify(convertToRaw(input));
    setBlog(raw);
  };

  // Initialize state variable and functions for dropdown menu
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const handleCatselection = (e) => {
    setCategorySelection(e.target.textContent);
  };

  // Render component JSX
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
            {/* Define dropdown menu items and handle click events */}
            <DropdownItem onClick={handleCatselection}>Music</DropdownItem>
            <DropdownItem onClick={handleCatselection}>Food</DropdownItem>
            <DropdownItem onClick={handleCatselection}>Culture</DropdownItem>
            <DropdownItem onClick={handleCatselection}>Sport</DropdownItem>
            <DropdownItem onClick={handleCatselection}>Place</DropdownItem>
            <DropdownItem onClick={handleCatselection}>Life</DropdownItem>
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
      <Footer />
    </Row>
  );
}
