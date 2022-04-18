import axios from "axios";
import React, { useContext, useRef } from "react";
import { DashboardContex } from "./Dashboard";

const AddPost = () => {
  const authorRef = useRef(null);
  const titleRef = useRef(null);
  const { setAddPostFlag } = useContext(DashboardContex);

  const saveToDB = (event) => {
    event.preventDefault();
    let author = authorRef.current.value;
    let title = titleRef.current.value;

    axios({
      method: "post",
      url: "/posts",
      data: JSON.stringify({
        title,
        author,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then(() => {
        setAddPostFlag(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="addPost">
      <form onSubmit={saveToDB}>
        <input
          type="text"
          name="author"
          placeholder="Author"
          ref={authorRef}
          required
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          ref={titleRef}
          required
        />
        <input type="submit" value="Add Post" />
      </form>
    </div>
  );
};

export default AddPost;
