import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";
const initialState = {
  list: [],
  isLoading: false,
};
export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async (_, thunkApi) => {
    try {
      const res = await axios(`${BASE_URL}/categories`);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err);
    }
  }
);
const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  extraReducers: (bulder) => {
    bulder
      .addCase(getCategories.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.list = action.payload;
        state.isLoading = false;
      })
      .addCase(getCategories.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
export default categoriesSlice.reducer;
