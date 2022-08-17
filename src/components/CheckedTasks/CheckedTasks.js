import React from "react";
import Checked from "../Checked/Checked";
import "./CheckedTasks.sass";

const CheckedTasks = ({
  completedTasks,
  remove,
  check,
  reverseCheck,
  removeCheck,
}) => {
  return (
    <div className="App__checkedTasks">
      {completedTasks.map((checked) => (
        <Checked
          title={checked.title}
          key={checked.id}
          remove={remove}
          removeCheck={removeCheck}
          check={check}
          checked={checked}
          reverseCheck={reverseCheck}
        />
      ))}
    </div>
  );
};

export default CheckedTasks;
