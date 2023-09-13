// rafce

import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

const TodoList = ({ allTodos, deleteTodo, toggleTodo }) => {
  console.log(allTodos);
  return (
    <div className="todo-list__view">
      <h2 className="todo-list__subtitle">List current:</h2>
      <ul className="todo-list__list">
        {allTodos.length == 0 && (
          <p className="todo-list__state">{"No todos"}</p>
        )}
        {allTodos.map((todo) => {
          return (
            <TodoItem
              todo={todo}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
              key={todo.id}
            />
          );
        })}
      </ul>
    </div>
  );
};

TodoList.propTtypes = {
  allTodos: PropTypes.array,
  deleteTodo: PropTypes.func,
  toggleTodo: PropTypes.func,
};

export default TodoList;
