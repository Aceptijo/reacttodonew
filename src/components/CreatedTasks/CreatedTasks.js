import React from "react";
import Task from "../Task/Task";
import "./CreatedTasks.sass";

const CreatedTasks = ({ tasks }) => {
  return (
    <div className="App__createdTasks">
      {tasks.map((task) => (
        <Task title={task.title} key={task.key} />
      ))}
    </div>
  );
};

export default CreatedTasks;
