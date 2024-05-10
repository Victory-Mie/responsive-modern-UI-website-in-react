import React from "react";
import "./whatGPT3.css";
import { Feature } from "../../components";
function WhatGPT3() {
  return (
    <div className="wgpt3 section-margin" id="wgpt3">
      <div className="wgpt3-header">
        <div className="wgpt3-title">
          <Feature title="What is GPT-3"></Feature>
        </div>
        <div className="wgpt3-content">
          <p>
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought. His defective nor convinced residence own.
            Connection has put impossible own apartments boisterous. At jointure
            ladyship an insisted so humanity he. Friendly bachelor entrance to
            on by.
          </p>
        </div>
      </div>
      <div className="wgpt3-possibility gradient-text">
          <h1>The possibilities are beyond your imagination</h1>
        <div>
          <p>Explore The Library</p>
        </div>
      </div>
      <div className="wgpt3-possibility-content">
        <Feature
          title="Chatbots"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
        ></Feature>
        <Feature
          title="Knowledgebase"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        ></Feature>
        <Feature
          title="Education"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        ></Feature>
      </div>
    </div>
  );
}

export default WhatGPT3;
