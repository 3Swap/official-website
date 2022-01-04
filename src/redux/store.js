import { configureStore } from '@reduxjs/toolkit';
import providersSlice from './providersSlice';
import toggleSlice from './toggleSlice';
import userSlice from './userSlice';

export default configureStore({
  reducer: {
    modal: toggleSlice,
    user: userSlice,
    provider: providersSlice
  }
});
