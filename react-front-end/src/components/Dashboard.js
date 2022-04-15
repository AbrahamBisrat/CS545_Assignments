import React, { useState } from "react";
import Posts from "../components/Posts";
import PostDetails from "./PostDetails";

export default function Dashboard() {
  let [posts, setPosts] = useState([
    { id: 123, title: "banana one", author: "wuff" },
    { id: 321, title: "fruitt one", author: "meaw" },
    { id: 534, title: "health one", author: "ding" },
    { id: 674, title: "inject one", author: "ding" },
  ]);

  const [selectedPost, setSelectedPost] = useState(-1);

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="posts">
        <Posts posts={posts} setSelectedPost={setSelectedPost} />
      </div>
      {selectedPost >= 0 && (
        <PostDetails
          post={posts.filter((each) => each.id === selectedPost)}
          updatePost={setPosts}
        />
      )}
    </div>
  );
}
