import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";

function BlogDetails() {
  const navigate = useNavigate("");
  const { id } = useParams();

  const {
    data: blog,
    pending,
    error,
  } = useFetch(`http://localhost:8000/blogs/${id}`);
  
  const handleDelete = () => {
    document.querySelector(".blog-details-container button").style.display ="none";

    const msg = document.createElement("div");
    msg.className = "msg";

    const msgContent = document.createElement("span");
    msgContent.innerHTML = "Are You sure you want to delete";
    msgContent.className = "msgContent";

    const yes = document.createElement("span");
    yes.innerHTML = "Yes";

    const cancel = document.createElement("span");
    cancel.innerHTML = "Cancel";

    msg.appendChild(msgContent);
    msg.appendChild(yes);
    msg.appendChild(cancel);
    document.querySelector(".blog-details-container").appendChild(msg);

    yes.onclick = () => {

      fetch(`http://localhost:8000/blogs/${id}`, {
        method: "DELETE",
      }).then(() => navigate("/"));

    };

    cancel.onclick = () => {

      document.querySelector(".blog-details-container button").style.display =
        "block";

      msg.style.display = "none";
    };

  };

  return (
    <div className="blog-details-container">
      {pending && 
      (
        <h3
          style={{
            height: "80vh",
            display: "flex",
            flexWrap: "wrap",
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Loading ...
        </h3>
      )}
      {error && 
      (
        <h3
          style={{
            height: "80vh",
            display: "flex",
            flexWrap: "wrap",
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {error}
        </h3>
      )}
      {blog && 
      (
        <article
          style={{
            height: "80vh",
            display: "flex",
            flexWrap: "wrap",
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
          <p> Written by {blog.author}</p>
        </article>
      )}
      <button onClick={handleDelete}>Delete Blog</button>
    </div>
  );
}

export default BlogDetails;
