import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
  status: "idle",
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchingProductStart: (state) => {
      state.status = "loading";
    },
    fetchingProductSuccess: (state, action) => {
      state.status = "succeeded";
      state.productData = action.payload;
    },
    fetchingProductFailure: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const {
  fetchingProductStart,
  fetchingProductSuccess,
    fetchingProductFailure,
} = productSlice.actions;
export default productSlice.reducer;
