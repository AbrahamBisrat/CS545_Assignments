import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PostContext } from "./Posts";
let p = (text) => console.log(text);

function Post({ post }) {
  const { setSelectedPost } = useContext(PostContext);

  const detailsHandler = () => {
    // console.log("selected post ", post.id);
    setSelectedPost(post);
  };

  return (
    <div className="post" onClick={detailsHandler}>
      <h2>Id : {post.id}</h2>
      <h2>Title : {post.title}</h2>
      <h2>Author : {post.author}</h2>
    </div>
  );
}

export default Post;
