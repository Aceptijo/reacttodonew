import React from "react";
import "./UpdateButton.sass";

const UpdateButton = ({ task, updateTask, newText }) => {
  return newText.length === 0 ? (
    <button
      className="App__updateButton-disabled"
      onClick={() => updateTask(task)}
    >
      Update
    </button>
  ) : (
    <button className="App__updateButton" onClick={() => updateTask(task)}>
      Update
    </button>
  );
};

export default UpdateButton;
