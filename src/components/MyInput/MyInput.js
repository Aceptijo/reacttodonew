import React from "react";
import "./MyInput.sass";

const MyInput = ({ setTitle, title, empty, add }) => {
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
      onKeyDown={(e) => {
        if (e.code === "Enter" || e.code === "NumpadEnter") {
          add();
        }
      }}
    />
  );
};

export default MyInput;
