import React from "react";
import "./Task.sass";
import DeleteButton from "../DeteleButton/DeleteButton";
import UncheckButton from "../UncheckButton/UncheckButton";

const Task = ({ title }) => {
  return (
    <div className="App__task">
      <UncheckButton />
      <span className="App__task-title">{title}</span>
      <DeleteButton />
    </div>
  );
};

export default Task;
