import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    taskCreated: (state, { payload }) => {
      const taskToAdd = {
        id: uuid(),
        name: payload.task,
        completed: false,
      };
      state.tasks = [...state.tasks, taskToAdd];
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    taskDeleted: (state, { payload }) => {},
    taskEdited: (state, { payload }) => {},
    taskStatusUpdated: (state, { payload }) => {},
  },
});

export default tasksSlice.reducer;

export const { taskCreated } = tasksSlice.actions;
