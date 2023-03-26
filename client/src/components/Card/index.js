import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import "./style.css";
import axios from "axios";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";
import parse from "html-react-parser";

const categoryImageMap = {
  Music: process.env.PUBLIC_URL + "/assets/images/music/drums.jpg",
  Food: process.env.PUBLIC_URL + "/assets/images/food/couscous.jpeg",
  Sport: process.env.PUBLIC_URL + "/assets/images/sport/football.jpeg",
  Life: process.env.PUBLIC_URL + "/assets/images/life/children.jpeg",
  Culture: process.env.PUBLIC_URL + "/assets/images/culture/yash.jpg",
  Place: process.env.PUBLIC_URL + "/assets/images/city/marakesh.jpeg",
};

const CardPost = ({ id, title, author, category, html, handleDelete }) => {
  const [rating, setRating] = useState(0);

  const handleDecrement = () => {
    setRating((prevRating) => {
      const newCount = Number(prevRating) - 1;
      localStorage.setItem("rating", newCount);
      return newCount;
    });
  };

  const handleIncrement = () => {
    setRating((prevRating) => {
      const newCount = Number(prevRating) + 1;
      localStorage.setItem("rating", newCount);
      return newCount;
    });
  };

  const getImage = useMemo(() => {
    return categoryImageMap[category];
  }, [category]);

  useEffect(() => {
    const initialValue = localStorage.getItem("rating");
    if (initialValue) setRating(Number(initialValue));
  }, []);

  const truncatedHtml = useMemo(() => {
    if (!html) return "";
    if (html.length <= 40) return parse(html);
    return parse(html.substring(0, 40) + "...");
  }, [html]);

  return (
    <Row className="cardBody">
      <Col md="12">
        <Card body>
          <i className="deleteIcon" onClick={() => handleDelete(id)}>
            X
          </i>
          <img className="photo" src={getImage} alt="" />
          <CardTitle tag="h5">{title}</CardTitle>
          <CardTitle tag="h5">{author}</CardTitle>
          <CardText>{truncatedHtml}</CardText>
          <a href={`/post/${id}`}>
            <Button className="button">Read more</Button>
          </a>
          <a href={`/write/${id}`}>
            <Button className="button">Update post</Button>
          </a>
          <div className="rating">
            <span>Rate post:</span>
            <Button variant="info" onClick={handleDecrement}>
              -
            </Button>
            <span>{rating}</span>
            <Button variant="info" onClick={handleIncrement}>
              +
            </Button>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

CardPost.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default CardPost;
