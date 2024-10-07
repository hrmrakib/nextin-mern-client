import { configureStore } from "@reduxjs/toolkit";
import filterResultSlice from "../features/filterResult/filterResultSlice";
import searchResultSlice from "../features/searchResult/searchResultSlice";

const store = configureStore({
  reducer: {
    filterResult: filterResultSlice,
    searchResult: searchResultSlice,
  },
});

export default store;
