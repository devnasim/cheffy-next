/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import client from '../apis/client';

const initialState = {
  plates: [],
  status: 'idle',
  error: null,
};
// auth/login : is a action type
export const platesAction = createAsyncThunk('/plates', async (params) => {
  const response = await client.get('/plate', { ...params });
  return response;
});

const authSlice = createSlice({
  name: 'plates',
  initialState,
  reducers: {
    // frontend custom function here
  },
  extraReducers: {
    [platesAction.pending]: (state) => {
      state.status = 'loading';
    },
    [platesAction.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.plates = action.payload.data;
    },
    [platesAction.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export default authSlice.reducer;
