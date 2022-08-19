import React, { useState } from "react";
import MyInput from "../MyInput/MyInput";
import MyButton from "../MyButton/MyButton";
import "./AddTask.sass";

const AddTask = ({ title, create, setTitle, add }) => {
  const [emptyTitle, setEmptyTitle] = useState(true);

  const showError = () => {
    setEmptyTitle(title.length !== 0);
  };

  return (
    <div className="App__addTask">
      <MyInput
        title={title}
        setTitle={setTitle}
        add={add}
        emptyTitle={emptyTitle}
        showError={showError}
      />
      <MyButton title={title} create={create} add={add} showError={showError}>
        Create
      </MyButton>
    </div>
  );
};

export default AddTask;
