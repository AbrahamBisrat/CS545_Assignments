import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import axios from "axios";

function App() {
  axios.defaults.baseURL = "http://localhost:3000";

  return (
    <div className="App">
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;
