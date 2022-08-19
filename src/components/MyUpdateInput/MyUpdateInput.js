import React from "react";
import "./MyUpdateInput.sass";

const MyUpdateInput = ({
  cancelUpdate,
  task,
  updateTask,
  setNewText,
  newText,
}) => {
  return (
    <input
      className="App__edited-title"
      type="text"
      defaultValue={newText}
      onChange={(event) => setNewText(event.target.value)}
      onKeyDown={(event) => {
        if (event.code === "Escape") cancelUpdate();
        if (event.code === "Enter" || event.code === "NumpadEnter") {
          updateTask(task);
        }
      }}
      autoFocus={true}
    />
  );
};

export default MyUpdateInput;
