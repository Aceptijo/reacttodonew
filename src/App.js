import "./App.sass";
import { useEffect, useState } from "react";
import AddTask from "./components/AddTask/AddTask";
import TasksList from "./components/TasksList/TasksList";
import Navbar from "./components/Navbar/Navbar";
import "./variablesLight.sass";

const getLocalDoneTasks = () => {
  const completedTask = localStorage.getItem("completedTasks");
  return completedTask ? JSON.parse(completedTask) : [];
};

const getLocalTasks = () => {
  const task = localStorage.getItem("createdTasks");
  return task ? JSON.parse(task) : [];
};

function App() {
  const [tasks, setTasks] = useState(() => getLocalTasks());
  const [completedTasks, setCompletedTasks] = useState(getLocalDoneTasks());
  const [title, setTitle] = useState("");

  useEffect(
    () => localStorage.setItem("createdTasks", JSON.stringify(tasks)),
    [tasks]
  );

  const lol = () => {

  }

  useEffect(
    () =>
      localStorage.setItem("completedTasks", JSON.stringify(completedTasks)),
    [completedTasks]
  );

  const create = (newTask) => {
    setTasks([...tasks, newTask]);
    setTitle("");
  };

  const add = () => {
    if (title !== "") {
      const newTask = {
        title: title,
        id: new Date().getTime(),
      };
      create(newTask);
    }
  };

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
      <Navbar />
      <AddTask add={add} title={title} setTitle={setTitle} create={create} />
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
