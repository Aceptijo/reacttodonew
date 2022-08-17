import React from "react";
import "./UpdateButton.sass";

const UpdateButton = ({ task, changeEdited }) => {
  return (
    <button className="App__updateButton" onClick={() => changeEdited(task)}>
      Update
    </button>
  );
};

export default UpdateButton;
