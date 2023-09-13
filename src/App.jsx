import { useState } from "react";
import "./assets/styles.css";
import NewTodoForm from "./components/NewTodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  function toggleTodo(id, checked) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: checked };
        }
        return todo;
      });
    });
  }

  function addTodo(title) {
    setTodos([
      ...todos,
      { id: crypto.randomUUID(), title: title, completed: false },
    ]);
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }
  return (
    <div className="todo-list">
      <h1 className="todo-list__header">Todo List</h1>
      <NewTodoForm onSubmit={addTodo} />
      <TodoList
        allTodos={todos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
      />
    </div>
  );
}

export default App;

// It is recommended that you pass the properties of the elements in a broken down manner, to be able to validate each component
