import React from "react";
import "./blog.css";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./import";
function blog() {
  const blogData = [
    {
      src: blog01,
      date: "Sep 26, 2021",
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    },
    {
      src: blog02,
      date: "Sep 26, 2021",
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    },
    {
      src: blog03,
      date: "Sep 26, 2021",
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    },
    {
      src: blog04,
      date: "Sep 26, 2021",
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    },
    {
      src: blog05,
      date: "Sep 26, 2021",
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    },
  ];
  return (
    <div className="blog section-padding" id="blog">
      <div className="blog-title">
        <h1 className=" gradient-text">A lot is happening, </h1>
        <h1 className=" gradient-text">We are blogging about it.</h1>
      </div>
      <div className="blog-content">
        <div className="blog-content-main">
          <Article
            src={blogData[0].src}
            date={blogData[0].date}
            title={blogData[0].title}
          ></Article>
        </div>
        <div className="blog-content-other">
          {blogData.splice(1).map((item, index) => (
            <Article
              src={item.src}
              date={item.date}
              title={item.title}
              key="index"
            ></Article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default blog;
