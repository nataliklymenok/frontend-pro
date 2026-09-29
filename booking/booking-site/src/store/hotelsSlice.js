import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  status: "idle", // idle | loading | succeeded | failed
  error: null,
};

const hotelsSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {
    fetchHotels: (state) => {
      state.status = "loading";
      state.error = null;
    },
    fetchHotelsSuccess: (state, action) => {
      state.status = "succeeded";
      state.items = action.payload;
    },
    fetchHotelsFailure: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const { fetchHotels, fetchHotelsSuccess, fetchHotelsFailure } =
  hotelsSlice.actions;

export default hotelsSlice.reducer;
