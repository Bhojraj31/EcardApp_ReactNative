import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from './myProductSlice';

export interface CartItem extends Product {
    // quantity: number;
}

export interface CartState {
    cartItems: CartItem[];
}

const initialState: CartState = {
    cartItems: [],
};

const MyCartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<Product>) {

            const existingItem = state.cartItems.find(item => item.id === action.payload.id);

            if (existingItem) {

                existingItem.qty += 1;
            } else {

                state.cartItems.push({ ...action.payload, qty: 1 });
            }
        },
        removeToCart(state, action: PayloadAction<Product>) {

            const existingItem = state.cartItems.find(item => item.id === action.payload.id);

            if (existingItem) {

                existingItem.qty -= 1;
            } else {

                state.cartItems.push({ ...action.payload, qty: 1 });
            }
        },
        deleteFromCart(state, action: PayloadAction<number>) {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        },
        clearCart(state) {

            state.cartItems = [];
        },
    },
});

export const { addToCart, deleteFromCart, clearCart, removeToCart } = MyCartSlice.actions;
export default MyCartSlice.reducer;
