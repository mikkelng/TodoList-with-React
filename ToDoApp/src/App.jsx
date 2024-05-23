
import { useState } from "react";
import  Navbar  from '../src/components/Navbar';
import  Footer from '../src/components/Footer';
import Sidebar  from '../src/components/Sidebar';
import  List  from './components/List';
import tasksData from '../src/task.json'
import './App.css'

const App = () => {
  const [allTasks, setAllTasks] = useState(tasksData);
  const [task, setTask] = useState("");
  const [completed, setCompleted] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

  const newTask = {
    task,
    completed
  }

  setAllTasks([...allTasks, newTask ]);
  setTask("");
  setCompleted(false);


  return (
    <div className="home-page">
      <Navbar />
      <Sidebar />
      <main className="content">
        <h1>Welcome!</h1>
        <p>This is the home page of the to-do list maker.</p>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label>
              Task:
              <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Completed:
              <input
                type="checkbox"
                checked={completed}
                onChange={(e) => setCompleted(e.target.checked)}
              />
            </label>
          </div>
          <button type="submit">Add Task</button>
        </form>
        <List tasks={allTasks} onDelete={handleDelete} />
      </main>
      <Footer />
    </div>
  );
};
}

export default App;