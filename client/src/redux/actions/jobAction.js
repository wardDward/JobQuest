import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchJobs = createAsyncThunk(
  "clientJob/fetchJobs",
  async (searchParams, thunkApi) => {
    try {
      const response = await axios.get("/api/seeker_jobs", {
        params: searchParams
      });
      return response.data.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.errors);
    }
  }
)

export const fetchJob = createAsyncThunk("clientJob/fetchJob", async (data) => {
  try {
    const response = await axios.get(`/api/view_jobs/${data}`);
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
});

export const applyJob = createAsyncThunk(
  "clientJob/applyJob",
  async (data, thunkApi) => {
    try {

      await axios.post("/api/apply_job", {job_post_id: data});
    } catch (error) {
      console.error(error);
    }
  }
);
