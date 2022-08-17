import React from "react";
import "./UpdateButton.sass";

const UpdateButton = ({ task, changeEdited, newText }) => {
  return newText.length === 0 ? (
    <button
      className="App__updateButton-disabled"
      onClick={() => changeEdited(task)}
    >
      Update
    </button>
  ) : (
    <button className="App__updateButton" onClick={() => changeEdited(task)}>
      Update
    </button>
  );
};

export default UpdateButton;
