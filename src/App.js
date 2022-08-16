import "./App.sass";
import { useState } from "react";
import AddTask from "./components/AddTask/AddTask";
import TasksList from "./components/TasksList/TasksList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const remove = (task) => {
    setTasks(tasks.filter((createdTask) => createdTask.id !== task.id));
  };

  const check = (task) => {
    setCompletedTasks([...completedTasks, task]);
    remove(task);
  };

  const removeCheck = (checked) => {
    setCompletedTasks(
      completedTasks.filter((completedTask) => completedTask.id !== checked.id)
    );
  };

  const reverseCheck = (checked) => {
    setTasks([...tasks, checked]);
    removeCheck(checked);
  };

  return (
    <div className="App">
      <span className="App__title"> NEW TODO</span>
      <AddTask tasks={tasks} setTasks={setTasks} />
      <TasksList
        tasks={tasks}
        completedTasks={completedTasks}
        remove={remove}
        removeCheck={removeCheck}
        check={check}
        reverseCheck={reverseCheck}
      />
    </div>
  );
}

export default App;
