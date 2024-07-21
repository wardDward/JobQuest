import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createJob = createAsyncThunk(
  "jobs/createJob",
  async (data, thunkApi) => {
    console.log(data);
    try {
      const response = await axios.post("/api/job_posts", {
        description: data.description,
        title: data.formData.title,
        starting_salary: data.formData.starting_salary,
        to_salary: data.formData.to_salary,
      });
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.errors);
    }
  }
);

export const fetchJobs = createAsyncThunk(
  "jobs/fetchJobs",
  async (_, thunkApi) => {
    try {
      const response = await axios.get("/api/jobs");
      console.log(response);
      return response.data.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.errors);
    }
  }
);
