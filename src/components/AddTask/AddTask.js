import React from "react";
import MyInput from "../MyInput/MyInput";
import MyButton from "../MyButton/MyButton";
import "./AddTask.sass";

const AddTask = ({ title, create, setTitle, add }) => {
  return (
    <div className="App__addTask">
      <MyInput title={title} setTitle={setTitle} add={add} />
      <MyButton title={title} create={create} add={add}>
        Create
      </MyButton>
    </div>
  );
};

export default AddTask;
