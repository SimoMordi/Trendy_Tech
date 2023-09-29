import { configureStore } from '@reduxjs/toolkit';
import somethingReducer from './slices/somethingSlice';

const store = configureStore({
  reducer: {
    counter: somethingReducer
  },
});

export default store;