import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
  products: any[]; 
}

const initialState: ProductState = {
  products: [],
};

const MyProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addMyProduct(state, action: PayloadAction<any>) {
      state.products.push(action.payload);
    },
  },
});

export const { addMyProduct } = MyProductSlice.actions;
export default MyProductSlice.reducer;
