import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterValue: "",
  version: 0,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    resetFilterValue: (state) => {
      state.filterValue = "";
    },
    setFilterValue: (state, action) => {
      state.version += 1;
      state.filterValue = action.payload;
    },
  },
});

export const { resetFilterValue, setFilterValue } = categoriesSlice.actions;
export default categoriesSlice.reducer;
