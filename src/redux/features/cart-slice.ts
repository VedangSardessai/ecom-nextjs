import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type CartItem = {
    id: number; // You may use a unique identifier for each item
    name: string;
    price: number;
    quantity: number;
};

export type CartState = {
    items: CartItem[];
};

const initialState: CartState = {
    items: [],
};

export const cart = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.items.find((item) => item.id === action.payload.id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                action.payload.quantity = 1; // Initialize quantity if it doesn't exist
                state.items.push(action.payload);
            }
        },
        increaseQuantity: (state, action: PayloadAction<number>) => {
            const itemToIncrease = state.items.find((item) => item.id === action.payload);

            if (itemToIncrease) {
                itemToIncrease.quantity += 1;
            }
        },
        decreaseQuantity: (state, action: PayloadAction<number>) => {
            const itemToDecrease = state.items.find((item) => item.id === action.payload);

            if (itemToDecrease && itemToDecrease.quantity > 1) {
                itemToDecrease.quantity -= 1;
            }
        },
    }
})


export const { addToCart, increaseQuantity, decreaseQuantity } = cart.actions;
export default cart.reducer;