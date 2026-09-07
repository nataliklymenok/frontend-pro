import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        done: false,
      };
      state.todos.push(newTodo);
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) {
        todo.done = !todo.done;
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
    },
    addAsync: () => {},
    toggleAsync: () => {},
    deleteAsync: () => {},
  },
});

// Action creators are generated for each case reducer function
export const {
  addTodo,
  toggleTodo,
  deleteTodo,
  addAsync,
  toggleAsync,
  deleteAsync,
} = todosSlice.actions;

export default todosSlice.reducer;
