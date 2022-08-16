import React from "react";
import "./TasksCount.sass";

const TasksCount = ({ tasks, completedTasks }) => {
  return (
    <div className="App__tasksCount">
      <span className="App__createdTasksCount">
        Created Tasks: {<div className="App__count">{tasks.length}</div>}
      </span>
      <span className="App__deletedTasksCount">
        Completed Tasks:
        {
          <div className="App__count">
            {completedTasks.length} of {tasks.length + completedTasks.length}
          </div>
        }
      </span>
    </div>
  );
};

export default TasksCount;
