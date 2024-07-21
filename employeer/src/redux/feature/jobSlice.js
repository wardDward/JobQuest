import { createSlice } from "@reduxjs/toolkit";
import { createJob, fetchJobs } from "../actions/useJobs";

const jobSlice = createSlice({
  name: "jobs",
  initialState: {
    jobs: [],
    isLoading: false,
    errorMessage: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createJob.pending, state => {
      state.isLoading = true
    })
    .addCase(createJob.fulfilled, (state, action) => {
      state.isLoading = false
      state.jobs = action.payload
      state.errorMessage = {}
    })
    .addCase(createJob.rejected, (state, action) => {
      state.isLoading = false
      state.errorMessage = action.payload
    })
    .addCase(fetchJobs.pending, state => {
      state.isLoading = true
      state.errorMessage = {}
    })
    .addCase(fetchJobs.fulfilled, (state, action) => {
      state.isLoading = false
      state.jobs = action.payload
      state.errorMessage =  {}
    })
    .addCase(fetchJobs.rejected, (state,action) => {
      state.isLoading = false
      state.errorMessage = action.payload
    })
  },
});

export default jobSlice.reducer;
