/* eslint-disable import/no-named-as-default */

/* eslint-disable import/prefer-default-export */
import { configureStore } from "@reduxjs/toolkit";
import genresSlice from "../slice/genresSlice";

import themeReducer from '../slice/themeSlice';
import tracksSlice from "../slice/tracksSlice";
import userReducer from '../slice/userSlice';

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        user: userReducer,
        tracks: tracksSlice,
        genres: genresSlice,
    }
})
