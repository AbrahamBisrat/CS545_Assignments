import React, { useState, Component } from "react";
import Post from "./Post";

export default function Posts() {
  let posts = [
    { id: 123, title: "banana one", author: "wuff" },
    { id: 321, title: "fruitt one", author: "meaw" },
    { id: 534, title: "health one", author: "ding" },
    { id: 674, title: "inject one", author: "ding" },
  ];

  let [selectedPost, setSelectedPost] = useState("");

  const updateSelectedPost = (id) => {
    if (id != null) setSelectedPost(id);
    console.log("updating ", selectedPost);
  };

  return (
    <div className="posts">
      {posts.map((post, key) => (
        <Post key={key} post={post} updateSelectedPost={updateSelectedPost} />
      ))}
    </div>
  );
}
