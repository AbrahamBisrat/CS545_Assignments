import React, { useRef, useState } from "react";
import axios from "axios";

export default function PostDetails({ post, refresh }) {
  const editHandler = (e) => {
    e.preventDefault();
    console.log("File being editted");
  };

  const deleteHandler = (e) => {
    e.preventDefault();
    axios
      .delete(`/posts/${post.id}`)
      .then(() => {
        // update the display
        refresh(Math.random());
        console.log("Post has been deleted");
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
          value={post.author}
          onChange={() => console.log("content also being chnaged")}
        />
        <input
          type="text"
          name="PostTitle"
          value={post.title}
          onChange={() => console.log("content being changed")}
        />

        <input type="submit" value="Edit" onClick={(e) => editHandler(e)} />
        <input type="submit" value="Delete" onClick={(e) => deleteHandler(e)} />
      </form>
    </div>
  );
}
