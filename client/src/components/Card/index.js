import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";
import parse from "html-react-parser";

const CardPost = (props, handleDelete, updateBlog) => {
  //  const handleDelete = async () => {
  //    try {
  //      await axios.delete("/post/id")

  //      window.location.replace("/");
  //    } catch (err) {}
  //  };

  return (
    <Row className="cardBody">
      <Col md="12">
        <Card body>
          <i className="deleteIcon" onClick={handleDelete}>
            X
          </i>
          <CardTitle tag="h5">{props.title}</CardTitle>
          <CardText>
            {props.description ? parse(props.description) : ""}
          </CardText>
          <Button className="button">Read more</Button>
          <Button className="button" onClick={updateBlog}>
            Update post
          </Button>
        </Card>
      </Col>
    </Row>
  );
};

export default CardPost;