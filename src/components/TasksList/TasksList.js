import React from "react";
import CreatedTasks from "../CreatedTasks/CreatedTasks";
import "./TasksList.sass";
import TasksCount from "../TasksCount/TasksCount";

const TasksList = ({ tasks }) => {
  return (
    <div className="App__tasksList">
      <TasksCount tasks={tasks} />
      <CreatedTasks tasks={tasks} />
    </div>
  );
};

export default TasksList;
