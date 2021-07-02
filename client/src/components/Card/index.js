import React from "react";
import "./style.css";
import axios from "axios";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";
import parse from 'html-react-parser'

const CardPost = (props) => {
 const handleDelete = async () => {
   try {
     await axios.delete("post/:id");
     window.location.replace("/");
   } catch (err) {}
 };

  return (
    <Row>
      <Col className="postCard" md="10">
        <Card body>
          <CardTitle tag="h5">{props.title}</CardTitle>
          <CardText>
            {props.description ? parse(props.description) : ""}
          </CardText>
          <Button>Go somewhere</Button>
          <i class="deleteIcon fas fa-trash" onClick={handleDelete}></i>
          <i className="editIcon far fa-edit"></i>
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
