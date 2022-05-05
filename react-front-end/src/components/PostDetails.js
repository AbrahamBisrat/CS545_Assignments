import React, { useRef, useState } from "react";

export default function PostDetails({ post, updatePost }) {
  const editHandler = (e) => {
    e.preventDefault();
    console.log("File being editted");
  };

  const deleteHandler = (e) => {
    e.preventDefault();
    console.log("File being deleted");
  };

  // temp value holders
  let author = post.at(0).author;
  let title = post.at(0).title;

  return (
    <div className="postDetails">
      <h2>Edit or Delete post</h2>
      <form>
        {console.log("post inside return : ", post)}
        <input
          type="text"
          name="PostAuthor"
          value={author}
          onChange={() => console.log("content also being chnaged")}
        />
        <input
          type="text"
          name="PostTitle"
          value={title}
          onChange={() => console.log("content being changed")}
        />

        <input type="submit" value="Edit" onClick={(e) => editHandler(e)} />
        <input type="submit" value="Delete" onClick={(e) => deleteHandler(e)} />
      </form>
    </div>
  );
}
