import { createSlice } from "@reduxjs/toolkit";
import { handleLogin, handleRegister, authenticatedEmployeer, updateProfile} from "../actions/useActions";


const userSlice = createSlice({
  name: "users",
  initialState: {
    users: null,
    authFlag: JSON.parse(localStorage.getItem("auth") || null),
    isLoading: false,
    errorMessage: {},
  },
  reducers: {
    clearState: (state) => {
      state.errorMessage = {}
    }
  },
  extraReducers: (builder) => {
    builder.addCase(handleLogin.pending, state => {
        state.isLoading = true
        state.errorMessage = {}
    })
    .addCase(handleLogin.fulfilled, (state, action) => {
        state.isLoading = false
        state.authFlag = true
        state.users = action.payload
        localStorage.setItem('auth', JSON.stringify(true))
        state.errorMessage = {}
    })
    .addCase(handleLogin.rejected, (state, action) => {
        state.isLoading = false
        state.users = null
        state.errorMessage = action.payload
    })
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
    .addCase(authenticatedEmployeer.pending, (state) => {
      state.isLoading = true;
      state.errorMessage = {};
    })
    .addCase(authenticatedEmployeer.fulfilled, (state, action) => {
      state.isLoading = false;
      state.authFlag = true;
      state.users = action.payload;
      localStorage.setItem("auth", JSON.stringify(true));
      state.errorMessage = {};
    })
    .addCase(authenticatedEmployeer.rejected, (state, action) => {
      state.isLoading = false;
      state.authFlag = false;
      state.errorMessage = action.payload;
      localStorage.removeItem('auth')
    })
    .addCase(updateProfile.pending, state => {
      state.isLoading = true
    })
    .addCase(updateProfile.fulfilled, state => {
      state.isLoading = false
    })
    .addCase(updateProfile.rejected, (state, action) => {
      state.isLoading = false
      state.errorMessage = action.payload
    })
  }
});

export const {clearState} =  userSlice.actions
export default userSlice.reducer;
