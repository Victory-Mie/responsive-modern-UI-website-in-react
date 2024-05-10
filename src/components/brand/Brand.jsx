import React from "react";
import "./brand.css";
import { google, slack, atlassian, dropbox, shopify } from "./import";
function Brand() {
  return (
    <div className="brand section-padding" id="brand">
        <img src={google} alt="google"></img>
        <img src={slack} alt="slack"></img>
        <img src={atlassian} alt="atlassian"></img>
        <img src={dropbox} alt="dropbox"></img>
        <img src={shopify} alt="shopify"></img>
    </div>
  );
}

export default Brand;
