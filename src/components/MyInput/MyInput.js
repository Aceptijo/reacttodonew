import React from "react";
import "./MyInput.sass";

const MyInput = ({ setTitle, title, add, emptyTitle, showError }) => {
  return (
    <input
      className={!emptyTitle ? "App__myInput-txt_active" : "App__myInput-txt"}
      type="text"
      placeholder={
        !emptyTitle ? "Please, enter at least something" : "Add new task"
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
