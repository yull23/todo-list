// rafce
import PropTypes from "prop-types";

const TodoItem = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <li className="todo-list__item" key={todo.id}>
      <div className="todo-list__container-checkbox">
        <input
          type="checkbox"
          className="todo-list"
          checked={todo.completed}
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
};

TodoItem.propTtypes = {
  todo: PropTypes.array,
  deleteTodo: PropTypes.func,
  toggleTodo: PropTypes.func,
};

export default TodoItem;
