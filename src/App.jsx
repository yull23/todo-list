import { useState } from "react";
import "./assets/styles.css";
import NewTodoForm from "./components/NewTodoForm";

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

      <div className="todo-list__view">
        <h2 className="todo-list__subtitle">List current:</h2>
        <ul className="todo-list__list">
          {todos.length == 0 && (
            <p className="todo-list__state">{"No todos"}</p>
          )}
          {todos.map((todo) => {
            return (
              <li className="todo-list__item" key={todo.id}>
                <div className="todo-list__container-checkbox">
                  <input
                    type="checkbox"
                    className="todo-list"
                    // checked={checked}
                    onChange={(e) => {
                      toggleTodo(todo.id, e.target.checked);
                    }}
                  />
                </div>
                <p className="todo-list__item-text">{todo.title}</p>
                <button
                  className="todo-list__item-button button"
                  onClick={() => deleteTodo(todo.id)}
                >
                  delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
