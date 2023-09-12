import { useState } from "react";
import "./assets/styles.css";

function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);
  function handlerChange(event) {
    setNewItem(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    setTodos([
      ...todos,
      { id: crypto.randomUUID(), title: newItem, completed: false },
    ]);
    setNewItem("");
  }

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

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }
  return (
    <div className="todo-list">
      <h1 className="todo-list__header">Todo List</h1>
      <form className="todo-list__form" onSubmit={handleSubmit}>
        <label className="todo-list__label" htmlFor="item">
          New Item
        </label>
        <input
          className="todo-list__input input-text"
          type="text"
          id="item"
          value={newItem}
          onChange={handlerChange}
        />
        <button className="todo-list__button button">Add</button>
      </form>
      <div className="todo-list__view">
        <h2 className="todo-list__subtitle">List current:</h2>
        <ul className="todo-list__list">
          {todos.length == 0 && <p>{"No todos"}</p>}
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
                  onClick={(e) => deleteTodo(todo.id)}
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
