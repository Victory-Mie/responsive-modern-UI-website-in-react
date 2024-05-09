import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
function Header() {
  return (
    <div className="header section-padding" id="home">
      <div className="header-content">
        <h1 className="gradient-text">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <div className="header-description">
          <p>
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>{" "}
        </div>
        <div className="header-content-input">
          <input type="email" placeholder="Your Email Address"></input>
          <button type="button">Get Started!</button>
        </div>

        <div className="header-people">
          <img src={people} alt="people"></img>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="header-ai">
        <img src={ai} alt="ai"></img>
      </div>
    </div>
  );
}

export default Header;
