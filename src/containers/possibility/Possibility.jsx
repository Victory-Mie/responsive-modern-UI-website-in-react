import React from "react";
import "./possibility.css";
import possibility from "../../assets/possibility.png";
function Possibility() {
  return (
    <div class="possibility section-padding" id="possibility">
      <div class="possibility-img">
        <img src={possibility} alt="possibility"></img>
      </div>
      <div class="possibility-content">
        <div class="pos-content-heading">
          <p>Request Early Access to Get Started</p>
        </div>
        <div class="pos-content-tilte gradient-text">
          <h1>The possibilities are beyond your imagination</h1>
        </div>
        <div class="pos-content-text">
          <p>
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
        </div>
        <div class="pos-content-link">
          <p>Request Early Access to Get Started</p>
        </div>
      </div>
    </div>
  );
}

export default Possibility;
