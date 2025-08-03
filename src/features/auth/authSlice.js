import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getCurrentUser,
  loginApi,
  logoutApi,
  signupApi,
} from "../../services/apiAuth";

const initialState = {
  user: null,
  isAuthenticated: false,
  status: "loading",
  error: null,
};

// Thunks
export const getUser = createAsyncThunk("auth/getUser", getCurrentUser);
export const signup = createAsyncThunk("auth/signup", signupApi);
export const login = createAsyncThunk("auth/login", loginApi);
export const logout = createAsyncThunk("auth/logout", logoutApi);

// Helper Functions
function pendingHelperFunction(state) {
  state.status = "loading";
  state.error = null;
}

function errorHelperFunction(state, action) {
  state.status = "error";
  state.isAuthenticated = false;
  state.error = action.error.message;
}

function fulfilledHelperFunction(state, action) {
  state.status = "idle";
  state.user = action.payload;
  state.isAuthenticated = true;
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    [getUser, signup, login, logout].forEach((thunk) => {
      builder.addCase(thunk.pending, pendingHelperFunction);
      builder.addCase(thunk.rejected, errorHelperFunction);
      if (thunk !== logout)
        builder.addCase(thunk.fulfilled, fulfilledHelperFunction);
      else
        builder.addCase(thunk.fulfilled, (state, action) => {
          state.status = "idle";
          state.isAuthenticated = false;
          state.user = null;
          state.error = null;
        });
    });
  },
});

export default authSlice.reducer;
