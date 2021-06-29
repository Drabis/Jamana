import React from "react";
import "./style.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
// import image from "../../assets/images/";

const CardPost = (props) => {
  return (
    <div className="postCard">
      <Card className="postItem">
        <CardImg
          className="postImg"
          top
          width="100%"
          // src={image}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h4">{props.title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {props.subtitle}
          </CardSubtitle>
          <CardText tag="p">{props.text}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardPost;
