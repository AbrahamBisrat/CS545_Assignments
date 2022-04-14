import React, { Component } from "react";

class Post extends Component {
  render() {
    return (
      <div className="post">
        {console.log("hellow from post component ")}
        {console.log(this.props)}
        <h2>Post</h2>
      </div>
    );
  }
}

export default Post;
