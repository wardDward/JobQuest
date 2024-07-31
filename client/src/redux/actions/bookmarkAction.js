import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const storeMark = createAsyncThunk(
  "bookmarks/storeMark",
  async (data, thunkApi) => {
    try {
      const response = await axios.post("/api/bookmark", {
        job_post_id: data.id,
      });
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.errors);
    }
  }
);

export const deleteMark = createAsyncThunk(
  "bookmarks/deleteMark",
  async (data) => {
    const job_post_id = data.id;
    try {
      await axios.delete(`/api/bookmark/${job_post_id}`);
    } catch (error) {
      console.error(error);
    }
  }
);

export const fetchBookmarks = createAsyncThunk(
  "bookmarks/fetchBookmarks",
  async () => {
    try {
      const response = await axios.get("/api/bookmarks");
      return response.data.data;
    } catch (error) {
      console.error(error);
    }
  }
);
