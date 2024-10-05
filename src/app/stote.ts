import { configureStore } from "@reduxjs/toolkit";
import filterResultSlice from "../features/filterResult/filterResultSlice";

const store = configureStore({
  reducer: {
    filterResult: filterResultSlice,
  },
});

export default store;
