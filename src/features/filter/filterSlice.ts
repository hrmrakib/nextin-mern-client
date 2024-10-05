import { createSlice } from "@reduxjs/toolkit";
import { axiosPublic } from "../../hooks/useAxiosPublic";

interface filterProps {
  filters: any;
}

const initialState: filterProps = {
  filters: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    anyType: (state) => {
      const res = axiosPublic.get("/api/filter");
      state.filters.push(res.data);
    },
    room: () => {},
    home: () => {},
  },
});

export const { anyType } = filterSlice.actions;

export default filterSlice.reducer;
