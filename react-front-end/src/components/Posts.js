import React, { Component } from "react";
import Post from "./Post";

class Posts extends Component {
  render() {
    let posts = [
      { id: 123, title: "banana one", author: "wuff" },
      { id: 321, title: "fruitt one", author: "meaw" },
      { id: 534, title: "health one", author: "ding" },
      { id: 674, title: "inject one", author: "ding" },
    ];
    return (
      <div className="posts">
        {posts.map((post, index) => {
          //   console.log(post, index);
          <Post post={post} />;
        })}
        <Post />
      </div>
    );
  }
}

export default Posts;
