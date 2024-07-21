import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const handleLogin = createAsyncThunk(
  "users/handleLogin",
  async (data, thunkApi) => {
    try {
      await axios.get("/sanctum/csrf-cookie");
      await axios.post("/employer/login", data);
      await thunkApi.dispatch(authenticatedEmployeer());
    } catch (error) {
      data.password = ''
      return thunkApi.rejectWithValue(error.response.data.errors);
    }
  }
);

export const handleRegister = createAsyncThunk(
  "users/handleRegister",
  async (data, thunkApi) => {
    try {
      await axios.get("/sanctum/csrf-cookie");
      await axios.post("/employer/register", data);
      await thunkApi.dispatch(authenticatedEmployeer());
    } catch (error) {
      data.password = "";
      return thunkApi.rejectWithValue(error.response.data.errors);
    }
  }
);

export const authenticatedEmployeer = createAsyncThunk(
  "users/authenticatedEmployeer",
  async (_, thunkApi) => {
    try {
      await axios.get("/sanctum/csrf-cookie");
      const response = await axios.get("/api/user");
      return response.data;
    } catch (error) {
      window.location.replace('/')
      return thunkApi.rejectWithValue(error.response.data.errors);
    }
  }
);

export const updateProfile = createAsyncThunk(
  "users/updateProfile",
  async (data, thunkApi) => {
    try {
      const response = await axios.post("/api/profile", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.errors);
    }
  }
);

export const sendEmail = async () => {
  try {
    await axios.post("/employer/email/verification-notification");
  } catch (error) {
    alert("Something went wrong, please try again.");
    console.error(error);
  }
};
