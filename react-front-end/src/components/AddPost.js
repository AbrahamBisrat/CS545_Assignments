import axios from "axios";
import React, { useContext } from "react";
import { DashboardContex } from "./Dashboard";

const AddPost = () => {
  const { setAddPostFlag } = useContext(DashboardContex);

  const saveToDB = (event) => {
    event.preventDefault();
    let author = event.target["author"].value;
    let title = event.target["title"].value;

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
        console.log("force re-render here");
        setAddPostFlag(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="addPost">
      <form onSubmit={saveToDB}>
        <input type="text" name="author" placeholder="Author" required />
        <input type="text" name="title" placeholder="Title" required />
        <input type="submit" value="Add Post" />
      </form>
    </div>
  );
};

export default AddPost;
