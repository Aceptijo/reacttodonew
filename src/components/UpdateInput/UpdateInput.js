import React from "react";
import "./UpdateInput.sass";

const UpdateInput = ({ value, task }) => {
  return (
    <div className="App__update">
      <input className="App__updateInput" defaultValue={value} type="text" />
      <button className="App__updateButton">Update</button>
    </div>
  );
};

export default UpdateInput;
