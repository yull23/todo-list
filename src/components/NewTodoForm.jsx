import { useState } from "react";
import PropTypes from "prop-types";

const NewTodoForm = ({ onSubmit }) => {
  const [newItem, setNewItem] = useState("");
  function handlerChange(event) {
    setNewItem(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (newItem === "") return;
    onSubmit(newItem);
    setNewItem("");
  }

  return (
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
  );
};

NewTodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default NewTodoForm;
