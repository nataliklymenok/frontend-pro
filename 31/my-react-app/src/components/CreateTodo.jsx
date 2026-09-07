import { useState } from "react";
import { useDispatch } from "react-redux";
import { addAsync } from "../store/todoSlice";

const CreateTodo = () => {
  const [taskText, setTaskText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskText.trim()) return;

    dispatch(addAsync(taskText));

    setTaskText("");
  };
  return (
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
  );
};

export default CreateTodo;
