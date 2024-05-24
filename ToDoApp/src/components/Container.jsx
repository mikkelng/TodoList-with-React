import Form from "./Form";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import List from "./List";
// import Editform from "../components/EditForm";
// import taskData from "../task.json"
uuidv4();

export const Container = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(todos);
  };
  const toggleComplete = id => {
    setTodos(todos.map(todo => todo.id === id ? 
    {...todo, completed: !todo.completed} : todo)
      
    );
  }
    return (
      <div className="Container">
        <h1>To-do list</h1>
        <Form addTodo={addTodo} />
        {todos.map((todo, index) => (
          <List
            task={todo}
            key={index}
             toggleComplete={toggleComplete}

          />
        ))}
      </div>
    );
  };


export default Container;
