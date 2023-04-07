import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [name, setName] = useState("Amr");
  const [pending, setPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    if (title === "" || body === "" || name === "") {
      e.preventDefault();
    } else {
      e.preventDefault();

      const blog = { title, body, author: name };

      setPending(true);
      fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
      }).then(() => {
        setTitle("");
        setBody("");
        setName("Amr");
        setTimeout(() => {
          setPending(false);
          navigate("/");
        }, 1000);
      });
    }
  };

  return (
    <div className="add-blog-container">
      <h2>Create New Blog</h2>
      <form className="add-blog" onSubmit={handleSubmit}>
        <label>Blog Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Blog Body</label>
        <textarea
          rows="8"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <label>Written by: </label>
        <select value={name} onChange={(e) => setName(e.target.value)}>
          <option>Amr</option>
          <option>Mai</option>
        </select>

        {!pending && <button> Add Blog</button>}
        {pending && <button> Adding Blog ...</button>}
      </form>
    </div>
  );
};

export default Create;
