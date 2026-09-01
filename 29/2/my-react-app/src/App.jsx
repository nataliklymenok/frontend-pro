import { useState } from "react";
import "./App.css";
import { addTodo } from "./store/todoSlice";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const todos = useSelector((state) => state.todos.todos);
  const count = useSelector((state) => state.todos.todos.length);
  const dispatch = useDispatch();
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskText.trim()) return;

    dispatch(addTodo(taskText));

    setTaskText("");
  };

  return (
    <>
      <main className="todo">
        <h1>TODO</h1>

        <form className="todo-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="todo-input"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            placeholder="Enter todo..."
          />

          <button type="submit" className="add-btn">
            Add
          </button>
        </form>

        <section className="todo-section">
          <h2>TODOS</h2>

          <ul className="todo-list">
            {todos.map((todo, index) => (
              <li key={todo.id} className="todo-item">
                <span className="todo-item-index">{index + 1}</span>
                <span className="todo-item-text">{todo.text}</span>
              </li>
            ))}
          </ul>

          <p className="todo-count">
            Total: <span>{count}</span>
          </p>
        </section>
      </main>
    </>
  );
}

export default App;
