import React from "react";
import CreatedTasks from "../CreatedTasks/CreatedTasks";
import "./TasksList.sass";
import TasksCount from "../TasksCount/TasksCount";
import CheckedTasks from "../CheckedTasks/CheckedTasks";

const TasksList = ({
  tasks,
  completedTasks,
  remove,
  check,
  reverseCheck,
  removeCheck,
}) => {
  return (
    <div className="App__tasksList">
      <TasksCount tasks={tasks} completedTasks={completedTasks} />
      <CreatedTasks tasks={tasks} remove={remove} check={check} />
      <CheckedTasks
        completedTasks={completedTasks}
        remove={remove}
        removeCheck={removeCheck}
        check={check}
        reverseCheck={reverseCheck}
      />
    </div>
  );
};

export default TasksList;
