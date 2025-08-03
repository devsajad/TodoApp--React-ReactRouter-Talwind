import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../services/apiTodos";

const initialState = {
  todoList: [],
  status: "idle", // 'idle' | 'loading' | 'error'
  error: null,
};

export const fetchApiTodos = createAsyncThunk("todos/fetchApi", api.readTodos);
export const addApiTodo = createAsyncThunk("todos/addApi", api.addTodo);
export const deleteApiTodo = createAsyncThunk(
  "todos/deleteApi",
  api.deleteTodo
);
export const toggleApiTodo = createAsyncThunk(
  "todos/toggleApi",
  api.toggleTodo
);
export const editApiTodo = createAsyncThunk("todos/editApi", api.editTodo);

function pendingHelperFunction(state) {
  state.status = "loading";
  state.error = null;
}

function rejectedHelperFunction(state, action) {
  state.status = "error";
  state.error = action.error.message;
}

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    loadLocalTodos(state) {
      state.todoList = JSON.parse(localStorage.getItem("todoList")) || [];
      state.status = "idle";
    },
    addLocalTodoSuccess(state, action) {
      state.todoList.push(action.payload);
      localStorage.setItem("todoList", JSON.stringify(state.todoList));
    },
    removeLocalTodo(state, action) {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
      localStorage.setItem("todoList", JSON.stringify(state.todoList));
    },
    toggleLocalTodo(state, action) {
      const todo = state.todoList.find((t) => t.id === action.payload.id);
      if (todo) todo.completed = !todo.completed;
      localStorage.setItem("todoList", JSON.stringify(state.todoList));
    },
    editLocalTodoSuccess(state, action) {
      const index = state.todoList.findIndex((t) => t.id === action.payload.id);
      if (index !== -1) {
        state.todoList[index] = action.payload;
      }
      localStorage.setItem("todoList", JSON.stringify(state.todoList));
    },
  },
  extraReducers: (builder) => {
    const apiThunks = [
      fetchApiTodos,
      addApiTodo,
      deleteApiTodo,
      toggleApiTodo,
      editApiTodo,
    ];

    apiThunks.forEach((thunk) => {
      builder.addCase(thunk.pending, pendingHelperFunction);
      builder.addCase(thunk.rejected, rejectedHelperFunction);
    });

    builder
      .addCase(fetchApiTodos.fulfilled, (state, action) => {
        state.status = "idle";
        state.todoList = action.payload;
      })
      .addCase(addApiTodo.fulfilled, (state, action) => {
        state.status = "idle";
        state.todoList.push(action.payload);
      })
      .addCase(deleteApiTodo.fulfilled, (state, action) => {
        state.status = "idle";
        state.todoList = state.todoList.filter(
          (todo) => todo.id !== action.meta.arg
        );
      })
      .addCase(toggleApiTodo.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.todoList.findIndex(
          (todo) => todo.id === action.payload.id
        );
        if (index !== -1) state.todoList[index] = action.payload;
      })
      .addCase(editApiTodo.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.todoList.findIndex(
          (todo) => todo.id === action.payload.id
        );
        if (index !== -1) state.todoList[index] = action.payload;
      });
  },
});

export const {
  loadLocalTodos,
  addLocalTodoSuccess,
  removeLocalTodo,
  toggleLocalTodo,
  editLocalTodoSuccess,
} = todosSlice.actions;

export default todosSlice.reducer;

// --- Master Thunks (for components to use) ---

export const initializeTodos = () => (dispatch, getState) => {
  const { storage } = getState();
  if (storage.mode === "api") {
    return dispatch(fetchApiTodos());
  } else {
    dispatch(loadLocalTodos());
    return Promise.resolve();
  }
};

export const createTodo = (newTodoData) => (dispatch, getState) => {
  const { storage, categories } = getState();
  if (storage.mode === "api") {
    return dispatch(addApiTodo(newTodoData));
  } else {
    const category = categories.catsData.find(
      (cat) => cat.id === newTodoData.categoryId
    );
    const fullTodo = {
      ...newTodoData,
      id: crypto.randomUUID(),
      completed: false,
      category: category || null,
    };
    dispatch(addLocalTodoSuccess(fullTodo));
    return Promise.resolve();
  }
};

export const removeTodo = (id) => (dispatch, getState) => {
  const { storage } = getState();
  if (storage.mode === "api") {
    return dispatch(deleteApiTodo(id));
  } else {
    dispatch(removeLocalTodo(id));
    return Promise.resolve();
  }
};

export const toggleTodoStatus =
  ({ id, completed }) =>
  (dispatch, getState) => {
    const { storage } = getState();
    if (storage.mode === "api") {
      return dispatch(toggleApiTodo({ id, completed: !completed }));
    } else {
      dispatch(toggleLocalTodo({ id }));
      return Promise.resolve();
    }
  };

export const editTodo = (todoData) => (dispatch, getState) => {
  const { storage, categories } = getState();
  if (storage.mode === "api") {
    return dispatch(editApiTodo(todoData));
  } else {
    const category = categories.catsData.find(
      (cat) => cat.id === todoData.categoryId
    );
    const fullTodo = { ...todoData, category: category || null };
    dispatch(editLocalTodoSuccess(fullTodo));
    return Promise.resolve();
  }
};
