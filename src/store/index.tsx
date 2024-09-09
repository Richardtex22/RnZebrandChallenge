import {configureStore} from '@reduxjs/toolkit';
import searchHistoryReducer from './SearchSlice/searchHistorySlice';

export const store = configureStore({
  reducer: {
    searchHistory: searchHistoryReducer,
  },
});
