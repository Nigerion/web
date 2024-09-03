import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import { suffle } from "../../utils/common";
const initialState = {
  list: [],
  isLoading: false,
  filtered: [],
  related: [],
};
export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, thunkApi) => {
    try {
      const res = await axios(`${BASE_URL}/products`);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err);
    }
  }
);
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterByPrice: (state, action) => {
      state.filtered = state.list.filter(({ price }) => price < action.payload);
    },
    getRelatedProduct: (state, action) => {
      const list = state.list.filter(
        ({ category: { id } }) => id < action.payload
      );
      state.related = suffle(list);
    },
  },
  extraReducers: (bulder) => {
    bulder
      .addCase(getProducts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.list = action.payload;
        state.isLoading = false;
      })
      .addCase(getProducts.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
export const { filterByPrice, getRelatedProduct } = productsSlice.actions;
export default productsSlice.reducer;
