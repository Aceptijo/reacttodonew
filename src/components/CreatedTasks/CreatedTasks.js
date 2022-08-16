import React from "react";
import Task from "../Task/Task";
import "./CreatedTasks.sass";

const CreatedTasks = ({ tasks, remove, check }) => {
  return (
    <div className="App__createdTasks">
      {tasks.map((task) => (
        <Task
          title={task.title}
          key={task.key}
          task={task}
          remove={remove}
          check={check}
        />
      ))}
    </div>
  );
};

export default CreatedTasks;
