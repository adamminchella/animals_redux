import React from "react";
import { useSelector } from "react-redux";
import AnimalCard from "../../components/AnimalCard";

const SavedAnimalsPage = () => {
  const allSavedAnimals = useSelector((state) => state.animals.savedAnimals);

  return (
    <>
      <h1>Saved:</h1>
      {allSavedAnimals.map((animal, i) => (
        <AnimalCard key={i} animalData={animal} />
      ))}
    </>
  );
};

export default SavedAnimalsPage;
