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
        },
        setSignUpForm: (state, action) => {
            state.value.email = action.payload.email;
            state.value.password = action.payload.password;
            state.value.username = action.payload.username;
        }
    }
})

export const { signUp, logout, setSignUpForm } = userSlice.actions;

export default userSlice.reducer;
