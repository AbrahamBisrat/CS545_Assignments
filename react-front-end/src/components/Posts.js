import axios from "axios";
import React, { useState, useEffect, createContext } from "react";
import Post from "./Post";
import PostDetails from "./PostDetails";

export const PostContext = createContext(null);

export default function Posts(refreshFlag) {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState("");
  const updateSelected = (selected) => selectedPost(selected);
  const [refresh, setRefresh] = useState(null);

  useEffect(() => {
    axios
      .get("/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refresh, refreshFlag]);

  return (
    <PostContext.Provider value={{ selectedPost, setSelectedPost, setRefresh }}>
      <div className="posts">
        {posts.map((post, key) => (
          <Post key={post.id} post={post} />
        ))}
        {selectedPost && <PostDetails />}
      </div>
    </PostContext.Provider>
  );
}
