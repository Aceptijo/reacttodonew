import React from "react";
import "./TasksCount.sass";

const TasksCount = ({ tasks }) => {
  return (
    <div className="App__tasksCount">
      <span className="App__createdTasksCount">
        Created Tasks: {<div className="App__count">{tasks.length}</div>}
      </span>
    </div>
  );
};

export default TasksCount;
