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
      };
      state.todos.push(newTodo);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo } = todosSlice.actions;

export default todosSlice.reducer;
