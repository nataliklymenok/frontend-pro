import { useState } from "react";

const initialTasks = [
  { id: 1, text: "Learn JavaScript", done: false },
  { id: 2, text: "Practice React", done: false },
  { id: 3, text: "Learn HTML & CSS", done: true },
];

const Todo = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [text, setText] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    setTasks([...tasks, { id: Date.now(), text, done: false }]);
    setText("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  //const clearAll = () => setTasks([]);

  return (
    <div className="todo-container">
      <h1>My ToDo List</h1>

      <form className="add-task" onSubmit={addTask}>
        <input
          id="taskInput"
          type="text"
          placeholder="Enter a new task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button id="addBtn" type="submit">
          Add Task
        </button>
      </form>

      <ul id="taskList">
        {tasks.map((task) => (
          <li key={task.id} className={`task${task.done ? " completed" : ""}`}>
            <div className="task-info">
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggleTask(task.id)}
              />
              <span>{task.text}</span>
            </div>

            <button className="delete-btn" onClick={() => deleteTask(task.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
