import { createSlice } from "@reduxjs/toolkit";

const searchResultSlice = createSlice({
  name: "searchResult",
  initialState: {
    searchResults: [],
  },
  reducers: {
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
    clearSearchResults: (state) => {
      state.searchResults = [];
    },
  },
});

export const { setSearchResults, clearSearchResults } =
  searchResultSlice.actions;

export default searchResultSlice.reducer;
