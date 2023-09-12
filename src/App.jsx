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
    console.log(todos);
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
          {todos.map((todo) => {
            return (
              <li className="todo-list__item" key={todo.id}>
                <div className="todo-list__container-checkbox">
                  <input type="checkbox" className="todo-list" />
                </div>
                <p className="todo-list__item-text">{todo.title}</p>
                <button className="todo-list__item-button button">
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
