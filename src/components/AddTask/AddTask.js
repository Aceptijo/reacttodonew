import React from "react";
import MyInput from "../MyInput/MyInput";
import MyButton from "../MyButton/MyButton";
import "./AddTask.sass";

const AddTask = ({ title, create, setTitle }) => {
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
