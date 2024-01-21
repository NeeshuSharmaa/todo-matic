import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allTasks: true,
  activeTasks: false,
  completedTasks: false,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    showAll: () => ({
      allTasks: true,
      activeTasks: false,
      completedTasks: false,
    }),
    showActive: () => ({
      allTasks: false,
      activeTasks: true,
      completedTasks: false,
    }),

    showCompleted: () => ({
      allTasks: false,
      activeTasks: false,
      completedTasks: true,
    }),
  },
});

export default filterSlice.reducer;

export const { showAll, showActive, showCompleted } = filterSlice.actions;
