import React from "react";
import "./style.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col,
} from "reactstrap";
import image from "../../assets/images/life/yash.jpg";

const CardPost = (props) => {
  return (
    <div className="postCard">
      <Col md="3">
        <Card className="postItem">
          <CardImg
            className="postImg"
            top
            width="100%"
            height="50%"
            src={image}
            alt="Card image cap"
          />

          <CardBody>
            <CardTitle tag="h4">{props.title}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              {props.description}
            </CardSubtitle>
            <CardText tag="p">{props.body}</CardText>
          </CardBody>
        </Card>
      </Col>
    </div>
  );
};

export default CardPost;
