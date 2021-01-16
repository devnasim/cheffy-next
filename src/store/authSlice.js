/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import client from '../apis/client';

const initialState = {
  isLoggedIn: false,
  userRole: null,
  user: null,
  status: 'idle',
  error: null,
};
// auth/login : is a action type
export const loginAction = createAsyncThunk('auth/login', async (params) => {
  const response = await client.post('user/login', { ...params });
  return response;
});

export const signUpAction = createAsyncThunk('auth/signup', async (params) => {
  const response = await client.post('user/signup', { ...params });
  return response;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // frontend custom function here
  },
  extraReducers: {
    [loginAction.pending]: (state) => {
      state.status = 'loading';
    },
    [loginAction.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.user = action.payload.data.userResponse;
      state.userRole = action.payload.data.userResponse.user_type;
      state.isLoggedIn = true;
    },
    [loginAction.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
    [signUpAction.pending]: (state) => {
      state.status = 'loading';
    },
    [signUpAction.fulfilled]: (state) => {
      state.status = 'succeeded';
    },
    [signUpAction.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export default authSlice.reducer;
