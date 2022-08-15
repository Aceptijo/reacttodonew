import "./App.sass";
import { useState } from "react";
import CreatedTasks from "./components/CreatedTasks/CreatedTasks";
import AddTask from "./components/AddTask/AddTask";
import TasksList from "./components/TasksList/TasksList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [deletedTasks, setDeletedTasks] = useState([]);

  return (
    <div className="App">
      <span className="App__title">NEW TODO</span>
      <AddTask tasks={tasks} setTasks={setTasks} />
      <TasksList tasks={tasks} />
    </div>
  );
}

export default App;
