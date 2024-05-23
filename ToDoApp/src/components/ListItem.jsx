
import './ListItem.css';

const ListItem = ({ task, index, deleteTask, toggleTaskCompletion }) => {
  return (
    <li className={task.completed ? 'completed' : ''}>
      {task.task}
      <div>
        <button onClick={() => toggleTaskCompletion(index)}>
          {task.completed ? '✅' : '❌'}
        </button>
        <button onClick={() => deleteTask(index)}>Delete</button>
      </div>
    </li>
  );
};

export default ListItem;