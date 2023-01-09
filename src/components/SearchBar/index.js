import React, { useState } from "react";

const SearchBar = ({ handleSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const updateInput = (e) => {
    const input = e.target.value;
    setSearchTerm(input);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(searchTerm);
    setSearchTerm("");
  };

  return (
    <form onSubmit={onSubmit} aria-label="search">
      <label htmlFor="search"></label>
      <input
        type="text"
        name="search"
        id="search"
        value={searchTerm}
        onChange={updateInput}
      />
      <input type="submit" value="Search" />
    </form>
  );
};

export default SearchBar;
