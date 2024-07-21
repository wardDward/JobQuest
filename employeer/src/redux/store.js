import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./feature/userSlice";
import jobSlice from "./feature/jobSlice";

const store = configureStore({
  reducer: {
    users: userSlice,
    jobs: jobSlice
  },
});

export default store;
