import axios from "axios";
import React from "react";

const AddPost = (addFlag) => {
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
        console.log("form data has been saved succesfully");
        console.log("force re-render here");
        addFlag(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="addPost">
      <form onSubmit={saveToDB}>
        <input type="text" name="author" required />
        <input type="text" name="title" required />
        <input type="submit" value="Add Post" />
      </form>
    </div>
  );
};

export default AddPost;
