import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createResume = createAsyncThunk(
  "resumes/createResume",
  async (data, thunkApi) => {
    try {
      const formData = new FormData();
      formData.append("contact", data.contact);
      formData.append("biography", data.biography);
      data.additional.forEach((item) => formData.append("additional[]", item));
      data.skills.forEach((item) => formData.append("skills[]", item));
      data.educationalAttainment.forEach((item) =>
        formData.append("educational_attainment[]", item)
      );
      data.workExperience.forEach((item) =>
        formData.append("work_experience[]", item)
      );
      data.awards.forEach((item) => formData.append("awards[]", item));

      console.log([...formData.entries()]);

      const response = await axios.post("/api/resumes", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data.resume;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.errors);
    }
  }
);

export const fetchResume = createAsyncThunk(
  "resumes/fetchResume",
  async (_, thunkApi) => {
    try {
      const response = await axios.get("/api/resumes");
      return response.data.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.errors);
    }
  }
);
