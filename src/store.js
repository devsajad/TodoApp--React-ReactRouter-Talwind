import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import categoriesReducer from "./features/categories/categoriesSlice";
import storageReducer from "./features/storage/storageSlice";
import todosReducer from "./features/todos/todosSlice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    categories: categoriesReducer,
    auth: authReducer,
    storage: storageReducer,
  },
});
