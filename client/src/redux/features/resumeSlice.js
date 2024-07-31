import { createSlice } from "@reduxjs/toolkit";
import { createResume, fetchResume } from "../actions/resumAction";

const resumeSlice = createSlice({
  name: "resumes",
  initialState: {
    isLoading: false,
    resume: [],
    errorMessage: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createResume.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = {};
      })
      .addCase(createResume.fulfilled, (state) => {
        state.isLoading = false;
        state.errorMessage = {};
      })
      .addCase(createResume.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      })
      .addCase(fetchResume.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchResume.fulfilled, (state, action) => {
        state.isLoading = false;
        state.resume = action.payload;
      })
      .addCase(fetchResume.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      });
  },
});

export default resumeSlice.reducer;
