import { useState, useEffect } from 'react';
import ListItem from './ListItem';
import './List.css';
import taskData from '../task.json';

const List = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(taskData);
  }, []);

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <div className="list">
      <h2>To-Do List</h2>
      <ul>
        {tasks.map((task, index) => (
          <ListItem
            key={index}
            task={task}
            index={index}
            deleteTask={deleteTask}
            toggleTaskCompletion={toggleTaskCompletion}
          />
        ))}
      </ul>
    </div>
  );
};

export default List;