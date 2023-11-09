import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  isAuth: boolean;
  email: string;
  // _id: string
};

const initialState: AuthState = {
  isAuth: false,
  email: "",
  // _id: "",
};

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signout: () => initialState, // Just return the initial state to sign out.

    login: (state, action: PayloadAction<string>) => {
      state.isAuth = true;
      state.email = action.payload;
      // You don't need to modify _id in this action.
    },
  },
});

export const { signout, login } = auth.actions;
export default auth.reducer;
