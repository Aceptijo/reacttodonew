import React from "react";
import MyInput from "../MyInput/MyInput";
import MyButton from "../MyButton/MyButton";
import "./AddTask.sass";

const AddTask = ({ title, create, setTitle }) => {
  const add = () => {
    if (title !== "") {
      const newTask = {
        title: title,
        id: new Date().getTime(),
        edited: false,
      };
      create(newTask);
    }
  };

  return (
    <div className="App__addTask">
      <MyInput title={title} setTitle={setTitle} />
      <MyButton title={title} create={create} add={add}>
        Create
      </MyButton>
    </div>
  );
};

export default AddTask;
