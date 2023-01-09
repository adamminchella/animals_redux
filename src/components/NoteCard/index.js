import React from "react";

const NoteCard = ({ posts }) => {
  return <>{posts.map((post, i) => <p key={i}>{post}</p>).reverse()}</>;
};

export default NoteCard;
