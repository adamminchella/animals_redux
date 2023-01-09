import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import {
  HomePage,
  AnimalsPage,
  SearchPage,
  NotePadPage,
  SavedAnimalsPage,
} from "./pages";

import "./styles.css";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/animals" element={<AnimalsPage />} />
        <Route exact path="/search" element={<SearchPage />} />
        <Route exact path="/notepad" element={<NotePadPage />} />
        <Route exact path="/saved" element={<SavedAnimalsPage />} />
      </Routes>
    </>
  );
};

export default App;
