import React from "react";
import logo from "../../assets/logo.svg";
import "./footer.css";
function Links({ title, text }) {
  return (
    <div class="links">
      <div class="links-title">{title}</div>
      {text.map((item, index) => (
        <div class="links-content">{item}</div>
      ))}
    </div>
  );
}
function Footer() {
  const linksData = [
    {
      title: "Links",
      text: ["Overons", "Social Media", "Counters", "Contact"],
    },
    {
      title: "Company",
      text: ["Terms & Conditions", "Privacy Policy", "Contact"],
    },
    {
      title: "Get in touch",
      text: [
        "Crechterwoord K12 182 DK Alknjkcb",
        "085-132567",
        "info@payme.net",
      ],
    },
  ];
  return (
    <div class="footer section-padding">
      <div class="footer-title">
        <h1 class="gradient-text">
          Do you want to step in to the future before others
        </h1>
      </div>
      <div class="footer-button">
        <button>Request Early Access</button>
      </div>
      <div class="footer-content">
        <div class="footer-content-logo">
          <img src={logo} alt="logo"></img>
          <div class="footer-content-slogan">
            <p>Crechterwoord K12 182 DK</p>
            <p> Alknjkcb, All Rights Reserved</p>
          </div>
        </div>
        <div class="footer-content-links">
          {linksData.map((item, index) => (
            <Links title={item.title} text={item.text}></Links>
          ))}
        </div>
      </div>
      <div class="footer-corp">
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
