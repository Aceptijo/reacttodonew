import React, { useState } from "react";
import "./Task.sass";
import DeleteButton from "../DeteleButton/DeleteButton";
import UncheckButton from "../UncheckButton/UncheckButton";
import EditButton from "../EditButton/EditButton";
import UpdateButton from "../UpdateButton/UpdateButton";

const Task = ({ task, remove, check }) => {
  const [edit, setEdit] = useState(false);
  const [newText, setNewText] = useState(task.title);

  const changeEdited = (task) => {
    if (newText.length !== 0) {
      setEdit(!edit);
      task.edited = edit;
      task.title = newText;
    }
  };

  return edit === false ? (
    <div className="App__task">
      <UncheckButton task={task} check={check} />
      <span className="App__task-title">{newText}</span>
      <EditButton task={task} changeEdited={changeEdited} />
      <DeleteButton task={task} remove={remove} id="task" />
    </div>
  ) : (
    <div className="App__editedTask">
      <input
        className="App__edited-title"
        type="text"
        defaultValue={newText}
        onChange={(event) => setNewText(event.target.value)}
        autoFocus={true}
      />
      <UpdateButton task={task} changeEdited={changeEdited} />
    </div>
  );
};

export default Task;
