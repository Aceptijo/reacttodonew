import React from "react";
import "./Task.sass";
import DeleteButton from "../DeteleButton/DeleteButton";
import UncheckButton from "../UncheckButton/UncheckButton";
import EditButton from "../EditButton/EditButton";

const Task = ({ title, task, remove, check }) => {
  return (
    <div className="App__task">
      <UncheckButton task={task} check={check} />
      <span className="App__task-title">{title}</span>
      <EditButton task={task} />
      <DeleteButton task={task} remove={remove} id="task" />
    </div>
  );
};

export default Task;
