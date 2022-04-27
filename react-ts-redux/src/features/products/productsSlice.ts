import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../../app/api";

export interface ProductState {
  products: { [id: string]: Product };
}

const initialState: ProductState = {
  products: {},
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    receiveProducts(state, action: PayloadAction<Product[]>) {
      const products = action.payload;
      products.forEach((product) => {
        state.products[product.id] = product;
      });
    },
  },
});

export const { receiveProducts } = productsSlice.actions;
export default productsSlice.reducer;
