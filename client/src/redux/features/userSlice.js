import { createSlice } from "@reduxjs/toolkit";
import {
  handleLogin,
  handleRegister,
  authenticatedEmployee,
  sendEmail,
  updateProfile,
} from "../actions/userAction";

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: null,
    authFlag: JSON.parse(localStorage.getItem("auth") || null),
    isLoading: false,
    errorMessage: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(handleRegister.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = {};
      })
      .addCase(handleRegister.fulfilled, (state) => {
        state.isLoading = false;
        state.errorMessage = {};
      })
      .addCase(handleRegister.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      })
      .addCase(handleLogin.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = {};
      })
      .addCase(handleLogin.fulfilled, (state) => {
        state.isLoading = false;
        state.errorMessage = {};
      })
      .addCase(handleLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      })
      .addCase(authenticatedEmployee.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = {};
      })
      .addCase(authenticatedEmployee.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
        state.authFlag = true;
        localStorage.setItem("auth", JSON.stringify(true));
        state.errorMessage = {};
      })
      .addCase(authenticatedEmployee.rejected, (state, action) => {
        state.isLoading = false;
        state.authFlag = false;
        state.errorMessage = action.payload;
        localStorage.removeItem("auth");
      })
      .addCase(updateProfile.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = {};
      })
      .addCase(updateProfile.fulfilled, (state) => {
        state.isLoading = false;
        state.errorMessage = {};
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      });
  },
});

export default userSlice.reducer;
