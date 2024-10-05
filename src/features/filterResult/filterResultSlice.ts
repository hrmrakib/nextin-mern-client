import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterResults: [],
};

const filterResultSlice = createSlice({
  name: "filterResult",
  initialState,
  reducers: {
    setFiltrerResult: (state, action) => {
      state.filterResults = action.payload;
    },
    clearFilterResults: (state) => {
      state.filterResults = [];
    },
  },
});

export const { setFiltrerResult, clearFilterResults } =
  filterResultSlice.actions;

export default filterResultSlice.reducer;
