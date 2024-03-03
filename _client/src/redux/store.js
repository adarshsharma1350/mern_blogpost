import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
// import { useReducer } from 'react';

export const store = configureStore({
  reducer: {
    user:userReducer,
  },
})