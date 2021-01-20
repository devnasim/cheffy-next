/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { Router } from 'next/router';
import Router from 'next/router';

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
    authSetOnReload(state, action) {
      console.log('authSetOnReload', action.payload);
      state.userRole = action.payload.userType;
      state.isLoggedIn = true;
    },
  },
  extraReducers: {
    [loginAction.pending]: (state) => {
      state.status = 'loading';
    },
    [loginAction.fulfilled]: (state, action) => {
      if (action.payload && action.payload) {
        const userRole = action.payload.data.userResponse.user_type;
        state.status = 'succeeded';
        state.user = action.payload.data.userResponse;
        state.userRole = userRole;
        state.isLoggedIn = true;
        document.cookie = `user_type=${action.payload.data.userResponse.user_type}`;
        document.cookie = `token=${action.payload.token}`;
        Router.push(userRole === 'user' ? '/plates' : userRole);
      } else {
        state.status = 'failed';
        state.error = { message: 'Please enter valid email and password' };
      }
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

export const { authSetOnReload } = authSlice.actions;

export default authSlice.reducer;
