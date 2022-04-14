import React, { Component } from "react";
import Posts from "../components/Posts";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <h2>hellow again</h2>
        <Posts />
        <form action="">
          <input type="text" />
          <input type="submit" value="Change stuff" />
        </form>
      </div>
    );
  }
}

export default Dashboard;
