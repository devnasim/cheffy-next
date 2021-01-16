import { configureStore } from '@reduxjs/toolkit';

import authSlice from './authSlice';
import plateSlice from './plateSlice';

export default configureStore({
  reducer: {
    auth: authSlice,
    plateData: plateSlice,
  },
});
