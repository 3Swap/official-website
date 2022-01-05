import { configureStore } from '@reduxjs/toolkit';
import toggleSlice from './toggleSlice';

export default configureStore({
  reducer: {
    modal: toggleSlice
  }
});
