// rafce

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
            <li className="todo-list__item" key={todo.id}>
              <div className="todo-list__container-checkbox">
                <input
                  type="checkbox"
                  className="todo-list"
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
  );
};

export default TodoList;
