import React, { useState } from "react";
import "./Task.sass";
import "./Task-media.sass";
import DeleteButton from "../DeteleButton/DeleteButton";
import UncheckButton from "../UncheckButton/UncheckButton";
import EditButton from "../EditButton/EditButton";
import UpdateButton from "../UpdateButton/UpdateButton";
import MyUpdateInput from "../MyUpdateInput/MyUpdateInput";

const Task = ({ task, remove, check, tasks }) => {
  const [edit, setEdit] = useState(false);
  const [newText, setNewText] = useState(task.title);

  const updateTask = (task) => {
    if (newText.length !== 0) {
      setEdit(!edit);
      task.title = newText;
      localStorage.setItem("createdTasks", JSON.stringify([...tasks]));
    }
  };

  const cancelUpdate = () => {
    setEdit(!edit);
    setNewText(task.title);
  };

  return edit === false ? (
    <div className="App__task">
      <UncheckButton task={task} check={check} />
      <span className="App__task-title">{newText}</span>
      <EditButton task={task} updateTask={updateTask} />
      <DeleteButton task={task} remove={remove} id="task" />
    </div>
  ) : (
    <div className="App__editedTask">
      <MyUpdateInput
        cancelUpdate={cancelUpdate}
        updateTask={updateTask}
        setNewText={setNewText}
        newText={newText}
        task={task}
      />
      <UpdateButton task={task} updateTask={updateTask} newText={newText} />
    </div>
  );
};

export default Task;
