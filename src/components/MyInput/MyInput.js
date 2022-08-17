import React from "react";
import "./MyInput.sass";

const MyInput = ({ setTitle, title, empty }) => {
  return (
    <input
      className={
        title === empty ? "App__myInput-txt_active" : "App__myInput-txt"
      }
      type="text"
      placeholder={
        title === empty ? "Please, enter at least something" : "Add new task"
      }
      value={title}
      onChange={(event) => setTitle(event.target.value)}
    />
  );
};

export default MyInput;
