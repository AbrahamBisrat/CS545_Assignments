import React, { useState, Component } from "react";
import Posts from "../components/Posts";
import PostDetails from "./PostDetails";
const axios = require("axios");

const Dashboard = () => {
  console.log("dashboard has run");
  const [selectedPost, setSelectedPost] = useState(-1);

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <Posts />
    </div>
  );
};

export default Dashboard;
