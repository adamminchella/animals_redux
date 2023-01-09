import React from "react";

const ButtonControl = ({ handleClick, isAnimalSaved }) => {
  return (
    <button onClick={handleClick}>{isAnimalSaved ? "Saved" : "Save"}</button>
  );
};

export default ButtonControl;
