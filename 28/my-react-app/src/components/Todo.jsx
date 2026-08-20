import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const initialTasks = [
  { id: 1, text: "Learn JavaScript", done: false },
  { id: 2, text: "Practice React", done: false },
  { id: 3, text: "Learn HTML & CSS", done: true },
];

const Todo = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const addTask = (values, { resetForm }) => {
    setTasks([...tasks, { id: Date.now(), text: values.text, done: false }]);
    resetForm();
  };

  const toggleTask = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const validate = (values) => {
    const errors = {};
    if (values.text.length < 5) {
      errors.text = "Task should be more than 5 chars";
    }
    return errors;
  };

  return (
    <div className="todo-container">
      <h1>My ToDo List</h1>

      <Formik
        initialValues={{ text: "" }}
        validate={validate}
        onSubmit={addTask}
      >
        <Form className="add-task">
          <div>
            <Field
              id="taskInput"
              name="text"
              type="text"
              placeholder="Enter a new task..."
            />
            <ErrorMessage
              name="text"
              component="div"
              className="error-message"
            />
          </div>
          <button id="addBtn" type="submit">
            Add Task
          </button>
        </Form>
      </Formik>

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
