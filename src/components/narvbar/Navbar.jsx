import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";

function Menu() {
  return (
    <>
      {" "}
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#wgpt3">What is GPT3?</a>
      </p>
      <p>
        <a href="#possibility">Open AI</a>
      </p>
      <p>
        <a href="#features">Case Studies</a>
      </p>
      <p>
        <a href="#blog">Library</a>
      </p>
    </>
  );
}
function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-links_container">
          <Menu></Menu>
        </div>
      </div>
      <div className="navbar-sign">
        <p>Sign in</p>
        <button type="button"> Sign up</button>
      </div>
      <div class="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          ></RiCloseLine>
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          ></RiMenu3Line>
        )}
        {/* 移动端大小时菜单栏的显示将由toggleMenu控制，弹出时有scale-up-center中心扩大动画效果 */}
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center">
            <div class="navbar-menu_container-links">
              <Menu></Menu>
              <div className="navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button"> Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
