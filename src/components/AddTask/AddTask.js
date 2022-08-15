import React, { useState } from "react";
import MyInput from "../MyInput/MyInput";
import MyButton from "../MyButton/MyButton";
import "./AddTask.sass";

const AddTask = ({ tasks, setTasks }) => {
  const [title, setTitle] = useState("");

  const create = (newTask) => {
    setTasks([...tasks, newTask]);
    setTitle("");
  };

  return (
    <div className="App__addTask">
      <MyInput title={title} setTitle={setTitle} />
      <MyButton title={title} create={create}>
        Create
      </MyButton>
    </div>
  );
};

export default AddTask;
