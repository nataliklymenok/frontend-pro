import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSwapiData = createAsyncThunk(
  "swapi/fetchData",
  async (category, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://swapi.online/api/${category}/`);

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const initialState = {
  category: "",
  results: [],
  count: 0,
  status: "idle", // idle | loading | succeeded | failed
  error: null,
};

const swapiSlice = createSlice({
  name: "swapi",
  initialState,
  reducers: {
    clearResults: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSwapiData.pending, (state, action) => {
        state.status = "loading";
        state.error = null;
        state.category = action.meta.arg;
      })
      .addCase(fetchSwapiData.fulfilled, (state, action) => {
        state.status = "succeeded";
        // swapi.online повертає просто масив, а не { count, results }
        state.results = Array.isArray(action.payload)
          ? action.payload
          : (action.payload.results ?? []);
        state.count = state.results.length;
      })
      .addCase(fetchSwapiData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload ?? action.error.message;
      });
  },
});

export const { clearResults } = swapiSlice.actions;
export default swapiSlice.reducer;
