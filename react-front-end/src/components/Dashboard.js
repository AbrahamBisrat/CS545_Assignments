import React, { useState, createContext } from "react";
import Posts from "../components/Posts";
import PostDetails from "./PostDetails";
import AddPost from "./AddPost";
const axios = require("axios");

export const DashboardContex = createContext(null);

const Dashboard = () => {
  console.log("dashboard has run");
  const [addPostFlag, setAddPostFlag] = useState(false);

  const addPostHandler = () => {
    console.log("hellow kitty");
    setAddPostFlag(true);
  };

  return (
    <div className="dashboard">
      <DashboardContex.Provider value={{ setAddPostFlag }}>
        <h2>Dashboard</h2>
        <button onClick={() => addPostHandler()}>Add posts</button>
        <Posts />
        {addPostFlag && <AddPost addFlag={setAddPostFlag} />}
      </DashboardContex.Provider>
    </div>
  );
};

export default Dashboard;
