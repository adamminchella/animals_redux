import React, { useState } from "react";
import NotePadForm from "../../components/NotePadForm";
import NoteCard from "../../components/NoteCard";

const NotePadPage = () => {
  const [posts, setPosts] = useState([]);

  const handleSubmit = (postInput) => setPosts([...posts, postInput]);

  return (
    <>
      <h1>Notepad</h1>
      <NotePadForm submitPost={handleSubmit} />
      <NoteCard posts={posts} />
    </>
  );
};

export default NotePadPage;
