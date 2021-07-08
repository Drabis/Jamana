import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";
import parse from "html-react-parser";

const CardPost = (props) => {
  const handleDelete = async () => {
    try {
      await axios.delete("/api/posts/" + props.id);

      props.handleDelete(props.id);
    } catch (err) {}
  };

  const getImage = () => {
    
    console.log(props)
    //   // switch statement to return image based on category
    let img;
    switch (props.category) {
      case "Music":
        img = process.env.PUBLIC_URL + "/assets/images/music/yash.jpg";
        break;
      case "Food":
        img = "food";
        break;
      case "Sport":
        img = "Sport";
        break;
      case "Life":
        img = "Life";
        break;
      case "Culture":
        img = "Culture";
        break;
        default:
    }
    console.log(img)
    return img;
  };

  return (
    <Row className="cardBody">
      <Col md="12">
        <Card body>
          <i className="deleteIcon" onClick={handleDelete}>
            X
          </i>
          <img src={getImage()} alt=""/>

          <CardTitle tag="h5">{props.title}</CardTitle>
          <CardTitle tag="h5">{props.author}</CardTitle>
          {/* <img src={getImage(props.category)} /> */}
          <CardText>
            {props.html && props.html.length > 10
              ? parse(props.html.substring(0, 10) + "...")
              : ""}
            {props.html && props.html.length < 10
              ? parse(props.html.substring(0, 10))
              : ""}
          </CardText>
          <a href={"/post/" + props.id}>
            <Button className="button">Read more</Button>
          </a>
          <a href={"/write/" + props.id}>
            <Button className="button">Update post</Button>
          </a>
        </Card>
      </Col>
    </Row>
  );
};

export default CardPost;
