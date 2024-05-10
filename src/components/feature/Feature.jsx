import React from "react";
import "./Feature.css";

function Feature({ title, text }) {
  return (
    <div className="feature">
      <div className="feature-title">
        <div  className="feature-title-bar"></div>
        <h1>{title}</h1>
      </div>
      <div className="feature-text">{text}</div>
    </div>
  );
}

export default Feature;
