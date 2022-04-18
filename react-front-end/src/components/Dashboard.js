import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState, createContext } from "react";
import Posts from "../components/Posts";
import AddPost from "./AddPost";
import Navbar from "./Navbar/Navbar";
const axios = require("axios");

export const DashboardContex = createContext(null);

const Dashboard = () => {
  const [addPostFlag, setAddPostFlag] = useState(false);

  const addPostHandler = () => setAddPostFlag(true);

  return (
    <div className="dashboard">
      <DashboardContex.Provider value={{ setAddPostFlag }}>
        <Router>
          <Navbar />
          <h2>Dashboard</h2>
          <Routes>
            <Route path="/" element={<Posts />}></Route>
            <Route path="/add" element={<AddPost />}></Route>
          </Routes>
        </Router>
      </DashboardContex.Provider>
    </div>
  );
};

export default Dashboard;
