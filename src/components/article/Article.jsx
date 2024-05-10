import React from "react";
import "./article.css";

function Article({ src, date, title }) {
  return (
    <div class="article">
      <img src={src} alt={src}></img>
      <div class="article-content">
        <div>
          <div class="article-date">
            <p>{date}</p>
          </div>
          <div class="article-title">
            <h1>{title}</h1>
          </div>
        </div>

        <div class="article-footer">
          <p>Read Full Article</p>
        </div>
      </div>
    </div>
  );
}

export default Article;
