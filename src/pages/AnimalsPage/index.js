import React, { useEffect, useState } from "react";
import AnimalCard from "../../components/AnimalCard";
import AddAnimalForm from "../../components/AddAnimalForm";
import axios from "axios";

import { addAnimal } from "../../actions/animalActions";

import "./styles.css";
import { useDispatch, useSelector } from "react-redux";

const AnimalsPage = () => {
  const animals = useSelector((state) => {
    return state.animals.all;
  });
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (animals.length != 0) {
      return;
    }
    const getUrl = (animal) =>
      `https://api.api-ninjas.com/v1/animals?name=${animal}`;

    const headers = {
      "X-Api-Key": "yzbAIVdwLRO0yVt/0kLENw==TqdeYcSzdwQPX73b",
    };

    async function loadAnimals() {
      setLoading(true);
      const cheetahResp = await axios.get(getUrl("cheetah"), {
        headers: headers,
      });
      const cheetah = cheetahResp.data.find(
        (animal) => animal.name.toLowerCase() == "cheetah"
      );
      const cheetahObj = {
        name: cheetah.name,
        locations: cheetah.locations,
      };

      const wolfResp = await axios.get(getUrl("wolf"), {
        headers: headers,
      });
      const wolf = wolfResp.data.find(
        (animal) => animal.name.toLowerCase() == "wolf"
      );
      const wolfObj = {
        name: wolf.name,
        locations: wolf.locations,
      };

      const bearResp = await axios.get(getUrl("bear"), {
        headers: headers,
      });
      const bear = bearResp.data.find(
        (animal) => animal.name.toLowerCase() == "bear"
      );
      const bearObj = {
        name: bear.name,
        locations: bear.locations,
      };

      dispatch(addAnimal(cheetahObj));
      dispatch(addAnimal(wolfObj));
      dispatch(addAnimal(bearObj));

      setLoading(false);
    }
    loadAnimals();
  }, []);

  const addNewAnimal = (animal) => {
    dispatch(addAnimal(animal));
  };

  return (
    <>
      <h1 className="animal-heading">Animals</h1>
      <AddAnimalForm handleForm={addNewAnimal} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        animals.map((animalData, i) => (
          <AnimalCard key={i} animalData={animalData} />
        ))
      )}
    </>
  );
};

export default AnimalsPage;
