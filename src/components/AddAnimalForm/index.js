import React, { useState } from "react";

const AddAnimalForm = ({ handleForm }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const onSubmit = (e) => {
    const animal = {
      name,
      locations: [location],
    };
    e.preventDefault();
    handleForm(animal);
    setName("");
    setLocation("");
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        id="name"
        onChange={handleNameChange}
        value={name}
      />
      <label htmlFor="location">Location:</label>
      <input
        type="text"
        name="location"
        id="location"
        onChange={handleLocationChange}
        value={location}
      />
      <input type="submit" value="Add animal" />
    </form>
  );
};

export default AddAnimalForm;
