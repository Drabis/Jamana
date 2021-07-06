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

// import React from "react";
// import "./style.css";
// import {
//   Card,
//   CardImg,
//   CardText,
//   CardBody,
//   CardTitle,
//   CardSubtitle,
//   Col,
// } from "reactstrap";
// import image from "../../assets/images/salmon.jpg";

// const CardPost = (props) => {
//   return (
//     <div className="postCard">
//       <Col md="3">
//         <Card className="postItem">
//           <CardImg
//             className="postImg"
//             top
//             width="100%"
//             height="50%"
//             src={image}
//             alt="Card image cap"
//           />
//           <CardBody>
//             <CardTitle tag="h4">{props.title}</CardTitle>
//             <CardSubtitle tag="h6" className="mb-2 text-muted">
//               {props.description}
//             </CardSubtitle>
//             <CardText tag="p">{props.body}</CardText>
//           </CardBody>
//         </Card>
//       </Col>
//     </div>
//   );
// };

// export default CardPost;
