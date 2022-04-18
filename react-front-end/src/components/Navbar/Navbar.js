import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to={"/"}>Posts</Link>
        </li>
        <li>
          <Link to={"/add"}>Add posts</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
