import React from "react";
import CreatedTasks from "../CreatedTasks/CreatedTasks";
import "./TasksList.sass";
import TasksCount from "../TasksCount/TasksCount";
import CheckedTasks from "../CheckedTasks/CheckedTasks";
import EmptyListSign from "../EmptyListSign/EmptyListSign";

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
      {tasks.length + completedTasks.length === 0 ? (
        <EmptyListSign />
      ) : tasks.length > 0 ? (
        <CreatedTasks tasks={tasks} remove={remove} check={check} />
      ) : null}
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
