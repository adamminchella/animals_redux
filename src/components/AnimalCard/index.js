import React from "react";
import "./styles.css";

import { useDispatch, useSelector } from "react-redux";

import { saveAnimal, forgetAnimal } from "../../actions/animalActions";

import ButtonControl from "../ButtonControl";
import { destroyAnimal } from "../../actions/animalActions";

const AnimalCard = ({ animalData }) => {
  const isAnimalSaved = useSelector((state) => {
    return state.animals.savedAnimals.some(
      (animal) => animalData.name == animal.name
    );
  });

  const dispatch = useDispatch();

  const handleSave = () => {
    if (isAnimalSaved) {
      dispatch(forgetAnimal(animalData));
    } else {
      dispatch(saveAnimal(animalData));
    }
  };

  const deleteAnimal = () => {
    dispatch(destroyAnimal(animalData));
  };

  return (
    <div className="animal-card">
      <h2 className="animal-name">{animalData.name}</h2>
      <h3 className="animal-locations-header">Locations:</h3>
      <ul className="animal-locations-list">
        {animalData.locations.map((location, i) => (
          <li className="animal-location" key={i}>
            {location}
          </li>
        ))}
      </ul>
      <button onClick={deleteAnimal}>Delete</button>
      <ButtonControl isAnimalSaved={isAnimalSaved} handleClick={handleSave} />
    </div>
  );
};

export default AnimalCard;
