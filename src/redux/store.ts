import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/cart-slice'
import summaryReducer from './features/summary-slice'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        summary: summaryReducer
    }
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch