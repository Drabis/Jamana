import RichEditor from "../RichEditor";
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

const CardPost = (props) => {
  return (
    <div className="postCard">
      <Card className="postItem">
        <CardImg
          className="postImg"
          top
          width="100%"
          src={props.image}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h5">{props.title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {props.subtitle}
          </CardSubtitle>
          <CardText>
            <RichEditor />
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardPost;
