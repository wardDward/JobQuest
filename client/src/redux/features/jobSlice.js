import { createSlice } from "@reduxjs/toolkit";
import { fetchJobs } from "../actions/jobAction";

const jobSlice = createSlice({
  name: "clientJob",
  initialState: {
    jobs: [],
    isLoading: false,
    errorMessage: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default jobSlice.reducer;
