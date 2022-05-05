import React from "react";
import { Link } from "react-router-dom";
let p = (text) => console.log(text);

function Post({ post, selectedPost }) {
  const detailsHandler = () => {
    console.log("selected post ", post.id);
    selectedPost(post);
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
