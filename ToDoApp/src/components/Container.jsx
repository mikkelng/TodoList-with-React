import Form from "./Form";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import List from "./List";
import EditForm from "./EditForm";
// import Editform from "../components/EditForm";
import taskData from "../task.json";
uuidv4();

export const Container = () => {
  const [todos, setTodos] = useState(taskData);
  console.log(todos);
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(todos);
  };
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };
  console.log(todos);
  return (
    <div className="Container">
      <h1>To-do list</h1>
      <Form  addTodo={addTodo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditForm editTodo={editTask} task={todo} key={index} />
        ) : (
          <List
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};

export default Container;
