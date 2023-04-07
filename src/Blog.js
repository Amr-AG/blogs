import React from "react";
import { NavLink } from "react-router-dom";

const Blog = ({ blogs, title }) => {
  return (
    <div className="blogs-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p> Written by {blog.author}</p>
          <NavLink to={`blog/${blog.id}`}>
            <button>Blog Details</button>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Blog;
