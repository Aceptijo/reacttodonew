import React from "react";
import "./MyInput.sass";
import "./MyInput-media.sass";

const MyInput = ({ setTitle, title, add, emptyTitle }) => {
  return (
    <input
      className={!emptyTitle ? "App__myInput-txt_active" : "App__myInput-txt"}
      placeholder="Add new task"
      type="text"
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
