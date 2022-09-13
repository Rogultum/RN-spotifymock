/* eslint-disable no-param-reassign */

/* eslint-disable import/prefer-default-export */
import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { email: '', password: '', username: '' };

export const userSlice = createSlice({
    name: 'user',
    initialState: { value: initialStateValue },
    reducers: {
        signUp: (state, action) => {
            state.value = action.payload;
        },
        logout: (state) => {
            state.value = initialStateValue;
        }
    }
})

export const { signUp, logout } = userSlice.actions;

export default userSlice.reducer;
