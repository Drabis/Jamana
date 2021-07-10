import React from "react";
import "./contact.css"

export default function Contact() {
  return (
    <div className="contact">
      <h1>
        Contact<span className="full-stop">.</span>
      </h1>
      <p>
        Your favorite blog page.
        <br />
        You can reach out with your questions, conserns, and suggestions.
        <hr className="gold-hr" />
        Or just say Hi and send me some compliment
        <hr className="gold-hr" />
        <p>Aboulaye Drabo Web Developer with a focus on front End.</p>
        <p> 235 West afrcian avenue Africa 10022</p>
        <p> Tel: + 123 456 6789</p>
        <div>
          <i className="sideIcon1 fab fa-facebook-square"></i>
          <i className="sideIcon1 fab fa-instagram-square"></i>
          <i className="sideIcon1 fab fa-twitter-square"></i>
        </div>
      </p>
    </div>
  );
}
