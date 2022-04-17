import axios from "axios";
import React, { useState, Component, useEffect } from "react";
import Post from "./Post";

export default function Posts() {
  console.log("posts");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("/posts")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="posts">
      {posts.map((post, key) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
