import { configureStore } from '@reduxjs/toolkit';

import postsReducer from './authReducer';
import plateReducer from './plateReducer';

export default configureStore({
  reducer: {
    auth: postsReducer,
    plateData: plateReducer,
  },
});
