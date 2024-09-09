import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchHistoryState {
  searchHistory: string[];
}

const initialState: SearchHistoryState = {
  searchHistory: [],
};

export const searchHistorySlice = createSlice({
  name: 'searchHistory',
  initialState,
  reducers: {
    addSearch: (state, action: PayloadAction<string>) => {
         const query = action.payload;
          if (!state.searchHistory.includes(query)) {
          state.searchHistory.push(query);
      }
    },
    clearSearchHistory: (state) => {
      state.searchHistory = [];
    },
  },
});

export const { addSearch, clearSearchHistory } = searchHistorySlice.actions;
export default searchHistorySlice.reducer;
