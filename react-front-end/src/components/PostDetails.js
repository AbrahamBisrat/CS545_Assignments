import React, { useRef, useContext, useState } from "react";
import axios from "axios";
import { PostContext } from "./Posts";

export default function PostDetails() {
  const { selectedPost, setRefresh, setSelectedPost } = useContext(PostContext);

  const editHandler = (e) => {
    e.preventDefault();
    console.log("File being editted");
  };

  const deleteHandler = (e) => {
    e.preventDefault();
    axios
      .delete(`/posts/${selectedPost.id}`)
      .then(() => {
        setRefresh(Math.random());
        console.log("Post has been deleted");
        // update the display
        setSelectedPost(null);
      })
      .catch((err) => {
        console.log("Error deleting file from databse");
        console.log(
          "perhaps the post you are looking to delete may not exist, lol"
        );
      });
  };

  return (
    <div className="postDetails">
      <h2>Edit or Delete post</h2>
      <form>
        <input
          type="text"
          name="PostAuthor"
          value={selectedPost.author}
          onChange={() => console.log("content also being chnaged")}
        />
        <input
          type="text"
          name="PostTitle"
          value={selectedPost.title}
          onChange={() => console.log("content being changed")}
        />

        <input type="submit" value="Edit" onClick={(e) => editHandler(e)} />
        <input type="submit" value="Delete" onClick={(e) => deleteHandler(e)} />
      </form>
    </div>
  );
}
