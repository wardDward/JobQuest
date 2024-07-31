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
      await axios.get("/sanctum/csrf-cookie")
      const response = await axios.get("/api/user")
      return response.data.data
    } catch (error) {
      window.location.replace('/')
      return thunkApi.rejectWithValue(error.response.data.errors);
    }
  }
);

export const updateProfile = createAsyncThunk(
  "users/updateProfile",
  async (data, thunkApi) => {
    console.log(data);
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


export const handleLogout = createAsyncThunk(
  "users/handleLogout",
  async (_, thunkApi) => {
    try {
      await axios.delete("/employer/logout");
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
