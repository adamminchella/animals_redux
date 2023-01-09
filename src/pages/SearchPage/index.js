import React, { useState } from "react";
import SearchBar from "../../components/SearchBar";
import AnimalCard from "../../components/AnimalCard";

import { getResults } from "../../actions/searchActions";
import { useDispatch, useSelector } from "react-redux";

const SearchPage = () => {
  const dispatch = useDispatch();

  const animals = useSelector((state) => state.search.results);

  const loading = useSelector((state) => state.search.loading);

  const error = useSelector((state) => state.search.error);

  // console.log(animals);
  const search = (searchTerm) => dispatch(getResults(searchTerm));

  return (
    <div>
      <SearchBar handleSubmit={search} />
      <h1>Results</h1>
      {error ? (
        <p>Oh dear</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        animals.map((animalData, i) => (
          <AnimalCard key={i} animalData={animalData} />
        ))
      )}
    </div>
  );
};

export default SearchPage;
