/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import queryString from 'query-string';
import client from '../apis/client';

const initialState = {
  plate: null,
  plateStatus: 'idle',
  plateError: null,
  popularPlates: [],
  popularStatus: 'idle',
  popularError: null,
  newPlates: [],
  newStatus: 'idle',
  newError: null,
  categories: [],
  categoryStatus: 'idle',
  categoryError: null,
  plates: [],
  status: 'idle',
  error: null,
};
// auth/login : is a action type
export const plateAction = createAsyncThunk('/plate', async () => {
  const response = await client.get('/plate/show/1');
  return response;
});
export const platesAction = createAsyncThunk('/plates', async () => {
  const response = await client.get('/plate');
  return response;
});

export const newPlatesAction = createAsyncThunk('/newPlates', async () => {
  const response = await client.get('/plate?sort=createdAt');
  return response;
});

export const popularPlatesAction = createAsyncThunk('/popular-plates', async () => {
  const response = await client.get('/plate/popular');
  return response;
});

export const categoriesAction = createAsyncThunk('/categories', async (params) => {
  const query = queryString.stringify(params);
  const url = params ? `/category?${query}` : '/category';
  const response = await client.get(url);
  return response;
});

const plateSlice = createSlice({
  name: 'plates',
  initialState,
  reducers: {
    // frontend custom function here
  },
  extraReducers: {
    [plateAction.pending]: (state) => {
      state.plateStatus = 'loading';
    },
    [plateAction.fulfilled]: (state, action) => {
      state.plateStatus = 'succeeded';
      state.plate = action.payload.data;
    },
    [plateAction.rejected]: (state, action) => {
      state.plateStatus = 'failed';
      state.plateError = action.payload;
    },
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

    [popularPlatesAction.pending]: (state) => {
      state.popularStatus = 'loading';
    },
    [popularPlatesAction.fulfilled]: (state, action) => {
      state.popularStatus = 'succeeded';
      state.popularPlates = action.payload.data;
    },
    [popularPlatesAction.rejected]: (state, action) => {
      state.popularStatus = 'failed';
      state.popularError = action.payload;
    },
    [newPlatesAction.pending]: (state) => {
      state.newStatus = 'loading';
    },
    [newPlatesAction.fulfilled]: (state, action) => {
      state.newStatus = 'succeeded';
      state.newPlates = action.payload.data;
    },
    [newPlatesAction.rejected]: (state, action) => {
      state.newStatus = 'failed';
      state.newError = action.payload;
    },

    [categoriesAction.pending]: (state) => {
      state.categoryStatus = 'loading';
    },
    [categoriesAction.fulfilled]: (state, action) => {
      state.categoryStatus = 'succeeded';
      state.categories = action.payload.data;
    },
    [categoriesAction.rejected]: (state, action) => {
      state.categoryStatus = 'failed';
      state.categoryError = action.payload;
    },
  },
});

export default plateSlice.reducer;
