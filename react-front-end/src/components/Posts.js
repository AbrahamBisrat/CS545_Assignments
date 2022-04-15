import React, { useState, Component } from "react";
import Post from "./Post";

export default function Posts({ posts, setSelectedPost }) {
  const updateSelectedPost = (id) => {
    if (id != null) setSelectedPost(id);
  };

  return (
    <div className="posts">
      {posts.map((post, key) => (
        <Post key={key} post={post} updateSelectedPost={updateSelectedPost} />
      ))}
    </div>
  );
}
