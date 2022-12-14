import React from "react";
import "./Navbar.sass";
import "./Navbar-media.sass";
import ThemeButton from "../ThemeButton/ThemeButton";

const Navbar = ({ mode, setMode }) => {
  return (
    <div className="App__navbar">
      <span className="App__title">NEW TODO</span>
      <ThemeButton mode={mode} setMode={setMode} />
    </div>
  );
};

export default Navbar;
