import React, { useState } from "react";

const NotePadForm = ({ submitPost }) => {
  const [postInput, setPostInput] = useState("");

  const addPost = (e) => {
    e.preventDefault();
    submitPost(postInput);
    setPostInput("");
  };

  const handleInputChange = (e) => {
    setPostInput(e.target.value);
  };

  return (
    <form onSubmit={addPost}>
      <input type="text" onChange={handleInputChange} value={postInput} />
      <input type="submit" value="Add post" />
    </form>
  );
};

export default NotePadForm;
