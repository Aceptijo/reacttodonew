import React from "react";
import "./MyInput.sass";

const MyInput = ({ setTitle, title }) => {
  return (
    <input
      className="App__myInput-txt"
      type="text"
      placeholder="Add new task"
      value={title}
      onChange={(event) => setTitle(event.target.value)}
    />
  );
};

export default MyInput;
