import React from "react";
import "./MyButton.sass";

const MyButton = ({ children, create, title }) => {
  const add = () => {
    if (title !== "") {
      const newTask = {
        id: Math.random(),
        checked: false,
        title: title,
        key: Math.random(),
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
