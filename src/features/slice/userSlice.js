import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";
const initialState = {
  list: [],
  isLoading: false,
  cart: [],
};
// export const getCategories = createAsyncThunk(
//   "categories/getCategories",
//   async (_, thunkApi) => {
//     try {
//       const res = await axios(`${BASE_URL}/categories`);
//       return res.data;
//     } catch (err) {
//       console.log(err);
//       return thunkApi.rejectWithValue(err);
//     }
//   }
// );
const userSlice = createSlice(
  {
    name: "categories",
    initialState,
    reducers: {
      addItemToCard: (state, action) => {
        let newCart = [...state.cart];
        const found = state.cart.find(({ id }) => id === action.payload.id);
        if (found) {
          newCart = newCart.map((item) => {
            return item.id === action.payload.id
              ? {
                  ...item,
                  quantity: action.payload.quantity || item.quantity + 1,
                }
              : item;
          });
        } else newCart.push({ ...action.payload, quantity: 1 });

        state.cart = newCart;
      },
    },
  }
  //   extraReducers: (bulder) => {
  // bulder
  //   .addCase(getCategories.pending, (state, action) => {
  //     state.isLoading = true;
  //   })
  //   .addCase(getCategories.fulfilled, (state, action) => {
  //     state.list = action.payload;
  //     state.isLoading = false;
  //   })
  //   .addCase(getCategories.rejected, (state) => {
  //     state.isLoading = false;
  //   });
  //   },
  // }
);
export default userSlice.reducer;
