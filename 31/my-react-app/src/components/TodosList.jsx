import { useSelector, useDispatch } from "react-redux";
import { deleteAsync, toggleAsync } from "../store/todoSlice";

const TodosList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const count = useSelector((state) => state.todos.todos.length);
  const dispatch = useDispatch();

  return (
    <section className="todo-section">
      <h2>TODOS</h2>

      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li
            key={todo.id}
            className={`todo-item${todo.done ? " done" : ""}`}
            onClick={() => dispatch(toggleAsync(todo.id))}
          >
            <span className="todo-item-index">{index + 1}</span>
            <span className="todo-item-text">{todo.text}</span>
            <button
              className="delete-btn"
              onClick={(e) => {
                e.stopPropagation();
                dispatch(deleteAsync(todo.id));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <p className="todo-count">
        Total: <span>{count}</span>
      </p>
    </section>
  );
};

export default TodosList;
