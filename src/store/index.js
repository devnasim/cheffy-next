import { configureStore } from '@reduxjs/toolkit';

import postsReducer from './authReducer';

export default configureStore({
  reducer: {
    auth: postsReducer,
  },
});
