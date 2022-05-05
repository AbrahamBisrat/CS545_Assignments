import React, { useState, Component } from "react";
import Posts from "../components/Posts";
import PostDetails from "./PostDetails";
import AddPost from "./AddPost";
const axios = require("axios");

const Dashboard = () => {
  console.log("dashboard has run");
  const [addPostFlag, setAddPostFlag] = useState(false);

  const addPostHandler = () => {
    console.log("hellow kitty");
    setAddPostFlag(true);
  };

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <button onClick={() => addPostHandler()}>Add posts</button>
      <Posts />
      {addPostFlag && <AddPost addFlag={setAddPostFlag} />}
    </div>
  );
};

export default Dashboard;
