import React from "react";
import DeleteButton from "../DeteleButton/DeleteButton";
import CheckButton from "../CheckButton/CheckButton";
import "./Checked.sass";

const Checked = ({ title, checked, check, reverseCheck, removeCheck }) => {
  return (
    <div className="App__checkedTask">
      <CheckButton
        checked={checked}
        check={check}
        reverseCheck={reverseCheck}
      />
      <span className="App__task-title">{title}</span>
      <DeleteButton checked={checked} removeCheck={removeCheck} id="checked" />
    </div>
  );
};

export default Checked;
