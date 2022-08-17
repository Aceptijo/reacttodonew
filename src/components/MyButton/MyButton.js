import React from "react";
import "./MyButton.sass";
import "./MyButton-media.sass";

const MyButton = ({ children, create, title }) => {
  const add = () => {
    if (title !== "") {
      const newTask = {
        title: title,
        id: new Date().getTime(),
        edited: false,
      };
      create(newTask);
    }
  };

  return (
    <button className="App__myButton" onClick={add}>
      {children}
    </button>
  );
};

export default MyButton;
