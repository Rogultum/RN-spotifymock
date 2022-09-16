/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

export const fetchGenres = createAsyncThunk('genres/getGenres', async () => {
    const response = await axios('http://api.napster.com/v2.2/genres?apikey=ZjlkMzZmYTYtNTMwMi00ZDgzLWI5MWEtZjU4ODdlOTIzODdl&lang=en-EN')
    return response.data.genres
})

export const genresSlice = createSlice({
    name: 'genres',
    initialState: {
        items: []
    },
    reducers: {},
    extraReducers: {
        [fetchGenres.fulfilled]: (state, action) => {
            state.items = action.payload;
        }
    }
})

export default genresSlice.reducer;
