import React from "react";
import "./Navbar.sass";
import ThemeButton from "../ThemeButton/ThemeButton";

const Navbar = () => {
  return (
    <div className="App__navbar">
      <span className="App__title">NEW TODO</span>
      <ThemeButton />
    </div>
  );
};

export default Navbar;
