import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type CartItem = {
    id: number; // You may use a unique identifier for each item
    name: string;
    img: string;
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
            localStorage.setItem("cart", JSON.stringify(state.items));

        },
        increaseQuantity: (state, action: PayloadAction<number>) => {
            const itemToIncrease = state.items.find((item) => item.id === action.payload);

            if (itemToIncrease) {
                itemToIncrease.quantity += 1;
            }

            localStorage.setItem("cart", JSON.stringify(state.items));

        },
        decreaseQuantity: (state, action: PayloadAction<number>) => {
            const itemToDecrease = state.items.find((item) => item.id === action.payload);

            if (itemToDecrease && itemToDecrease.quantity > 1) {
                itemToDecrease.quantity -= 1;
            }

            localStorage.setItem("cart", JSON.stringify(state.items));

        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            const index = state.items.findIndex((item) => item.id === action.payload);

            if (index !== -1) {
                state.items.splice(index, 1);
            }
            localStorage.setItem("cart", JSON.stringify(state.items));

        },
        resetCart: () => {
            return initialState
        }
    }
})


export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart, resetCart } = cart.actions;
export default cart.reducer;