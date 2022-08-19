import React from "react";
import "./MyButton.sass";
import "./MyButton-media.sass";

const MyButton = ({ children, add, showError }) => {
  return (
    <button
      className="App__myButton"
      onClick={() => {
        showError();
        add();
      }}
    >
      {children}
    </button>
  );
};

export default MyButton;
