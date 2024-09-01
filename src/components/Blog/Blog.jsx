import React, { useState } from "react";
import "./Blog.css";

const Blog = () => {
  const [blog, setBlog] = useState([
    {
      id: 1,
      title: "Russian activist speaks out in spy case after prisoner swap",
      excerpt:
        "Zhanna Nemtsova says her suspicions were confirmed when Spanish reporter Pablo González returned to Moscow in a prisoner swap.",
      pic: "https://ichef.bbci.co.uk/news/1536/cpsprodpb/bd58/live/e0a27f80-6846-11ef-8c32-f3c2bc7494c6.jpg.webp",
    },
  ]);

  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [pic, setPic] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleExcerptChange = (e) => {
    setExcerpt(e.target.value);
  };

  const handlePicChange = (e) => {
    setPic(e.target.value);
  };

  const addingBlog = () => {
    setBlog((prevState) => {
      return [{ title, excerpt, pic }, ...prevState];
    });
    setTitle("");
    setExcerpt("");
    setPic("");
  };

  return (
    <>
      <div className="container">
        <div className="form-area">
          <input
            type="text"
            placeholder="Blog Title"
            value={title}
            onChange={handleTitleChange}
          />
          <input
            type="text"
            placeholder="Blog Excerpt"
            value={excerpt}
            onChange={handleExcerptChange}
          />
          <input
            type="text"
            placeholder="Image Link"
            value={pic}
            onChange={handlePicChange}
          />
          <button onClick={addingBlog} type="Submit">
            Add Blog
          </button>
        </div>
        <div className="blog">
          <h1>This is blog title</h1>
        </div>
        <div className="blog-area">
          {blog.map((item, index) => {
            return (
              <div key={index} className="blog-item">
                <div className="blog-content">
                  <img src={item.pic} alt="" />
                  <h2>{item.title}</h2>
                  <p>{item.excerpt}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Blog;
