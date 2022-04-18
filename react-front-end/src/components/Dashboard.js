import React, { useState, createContext } from "react";
import Posts from "../components/Posts";
import AddPost from "./AddPost";
const axios = require("axios");

export const DashboardContex = createContext(null);

const Dashboard = () => {
  const [addPostFlag, setAddPostFlag] = useState(false);

  const addPostHandler = () => setAddPostFlag(true);

  return (
    <div className="dashboard">
      <DashboardContex.Provider value={{ setAddPostFlag }}>
        <h2>Dashboard</h2>
        <button onClick={() => addPostHandler()}>Add posts</button>
        <Posts />
        {addPostFlag && <AddPost />}
      </DashboardContex.Provider>
    </div>
  );
};

export default Dashboard;
