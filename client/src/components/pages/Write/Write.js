import React from "react";
import RichEditor from "../../RichEditor";
import "./style.css"

export default function Write() {
  const handlePostSubmit = () => {
    
  }
  return (
    <div>
      <RichEditor />
      <button onClick={handlePostSubmit} className="postBtn">POST</button>
    </div>
  );
}
