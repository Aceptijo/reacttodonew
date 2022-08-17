import React from "react";
import "./MyButton.sass";
import "./MyButton-media.sass";

const MyButton = ({ children, add }) => {
  return (
    <button className="App__myButton" onClick={() => add()}>
      {children}
    </button>
  );
};

export default MyButton;
