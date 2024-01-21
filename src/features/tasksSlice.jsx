import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    createTask: (state, { payload }) => {
      const taskToAdd = {
        id: uuid(),
        name: payload.task,
        completed: false,
      };
      state.tasks = [...state.tasks, taskToAdd];
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    deleteTask: (state, { payload }) => {
      state.tasks = state.tasks.filter(({ id: ID }) => ID !== payload.id);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    editTask: (state, { payload }) => {
      state.tasks = state.tasks.map((task) =>
        task.id === payload.id ? { ...task, name: payload.name } : task
      );
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    updateTaskStatus: (state, { payload }) => {
      state.tasks = state.tasks.map((task) =>
        task.id === payload.id
          ? { ...task, completed: payload.completed }
          : task
      );
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
  },
});

export default tasksSlice.reducer;

export const { createTask, deleteTask, editTask, updateTaskStatus } =
  tasksSlice.actions;
