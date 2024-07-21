import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const handleLogin = createAsyncThunk(
  "users/handleLogin",
  async (data, thunkApi) => {
    try {
      await axios.get("/sanctum/csrf-cookie");
      await axios.post("/seeker/login", data);
      await thunkApi.dispatch(authenticatedEmployee());
    } catch (error) {
      data.password = "";
      return thunkApi.rejectWithValue(error.response.data.errors);
    }
  }
);

export const handleRegister = createAsyncThunk(
  "users/handleRegister",
  async (data, thunkApi) => {
    try {
      await axios.get("/sanctum/csrf-cookie");
      await axios.post("/seeker/register", data);
      await thunkApi.dispatch(authenticatedEmployee());
    } catch (error) {
      data.password = "";
      return thunkApi.rejectWithValue(error.response.data.errors);
    }
  }
);

export const authenticatedEmployee = createAsyncThunk(
  "users/authenticatedEmployee",
  async (_, thunkApi) => {
    try {
      await axios.get("/sanctum/csrf-cookie");
      const response = await axios.get("/api/user");
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.errors);
    }
  }
);

export const sendEmail = async () => {
  try {
    await axios.post("/seeker/email/verification-notification");
  } catch (error) {
    alert("Something went wrong please try again.");
    console.error(error);
  }
};

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: null,
    authFlag: JSON.parse(localStorage.getItem('auth') || null),
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
        localStorage.removeItem('auth')
      });
  },
});

export default userSlice.reducer;
