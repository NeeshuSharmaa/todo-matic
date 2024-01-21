import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../features/tasksSlice";
import filterReducer from "../features/filtersSlice";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filter: filterReducer,
  },
});

export default store;
