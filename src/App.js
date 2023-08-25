import { useState } from "react";
import Header from "./components/Header";
import TasksList from "./components/TasksList";
import AddForm from "./components/AddForm";


function App() {

  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor's appoinment",
      day: "Feb 5th at 2pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at school",
      day: "May 20th at 10am",
      reminder: true,
    },
    {
      id: 3,
      text: "Food shopping",
      day: "June 1st at 5pm",
      reminder: false,
    },    

  ]);

  const addTask = (task) =>{
    const id = Math.floor(Math.random()* 10000) + 1;

    const newTask = {id, ...task};
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) =>task.id !== id ));
  }

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };


  return (
    <div className="main">

      <Header title="Task Tracker" 
        showAdd = {showAddTask } 
        onAdd = {() => setShowAddTask(!showAddTask)}
      />

      {showAddTask && <AddForm onAdd={addTask} />}
        {tasks.length > 0 ? (
          <TasksList tasks={tasks} onDeleteTask={deleteTask} onToggle={toggleReminder} />
        ) : (
          "No Task To Show"
      )}

      {/* <TasksList tasks={tasks} onDeleteTask = {deleteTask}  /> */}

      {/* <AddForm /> */}
    </div>
  );
}

export default App;
