import React from "react";
import "./UpdateInput.sass";

const UpdateInput = ({ task, changeEdited }) => {
  return (
    <button className="App__updateButton" onClick={() => changeEdited(task)}>
      Update
    </button>
  );
};

export default UpdateInput;
