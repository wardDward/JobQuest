import { createAsyncThunk } from "@reduxjs/toolkit";
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
      return response.data.data;
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

export const updateProfile = createAsyncThunk(
  "users/updateProfile",
  async (data, thunkApi) => {
    console.log(data);
    try {
      const response = await axios.put("/api/seeker_profle", data);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.errors);
    }
  }
);

export const handleLogout = createAsyncThunk(
  "users/handleLogout",
  async (_, thunkApi) => {
    try {
      await axios.delete("/seeker/logout");
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
