import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Amr Blog</h1>
      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink className="newBolg" to="create">
          New Blog
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
