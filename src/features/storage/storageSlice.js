import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: localStorage.getItem("storageMode")?.replace(/"/g, "") || "api",
};

const storageSlice = createSlice({
  name: "storage",
  initialState,
  reducers: {
    toggleStorageMode(state) {
      state.mode = state.mode === "api" ? "local" : "api";
      localStorage.setItem("storageMode", JSON.stringify(state.mode));
    },
  },
});

export const { toggleStorageMode } = storageSlice.actions;
export default storageSlice.reducer;
