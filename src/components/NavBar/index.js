import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./styles.css";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <NavLink className="home-link" to="/">
        Home
      </NavLink>
      <NavLink activeclassname="animals" to="/animals">
        Animals
      </NavLink>
      <NavLink activeclassname="search" to="/search">
        Search
      </NavLink>
      <NavLink activeclassname="notepad" to="/notepad">
        Notepad
      </NavLink>
      <NavLink activeclassname="saved" to="/saved">
        Saved
      </NavLink>
      <button className="nav-btn" onClick={() => navigate(-1)}>
        Back
      </button>
    </nav>
  );
};

export default NavBar;
