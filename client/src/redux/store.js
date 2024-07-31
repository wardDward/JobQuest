import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
import resumeSlice from "./features/resumeSlice";
import jobSlice from "./features/jobSlice";

const store = configureStore({
  reducer: {
    users: userSlice,
    resumes: resumeSlice,
    clientJob: jobSlice
  },
});

export default store;
