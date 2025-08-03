import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { readCats } from "../../services/apiTodos";

const initialState = {
  catsData: [],
  status: "idle", // 'idle' | 'loading' | 'error'
  error: null,
};

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async () => {
    const data = await readCats();
    return data;
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.catsData = action.payload;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export default categoriesSlice.reducer;
