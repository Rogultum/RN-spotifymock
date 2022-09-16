/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

export const fetchTracks = createAsyncThunk('tracks/getTracks', async () => {
    const response = await axios('https://theaudiodb.com/api/v1/json/2/mvid.php?i=112024');
    return response.data.mvids;
})

export const tracksSlice = createSlice({
    name: 'tracks',
    initialState: {
        items: []
    },
    reducers: {},
    extraReducers: {
        [fetchTracks.fulfilled]: (state, action) => {
            state.items = action.payload;
        }
    }
})

export default tracksSlice.reducer;
