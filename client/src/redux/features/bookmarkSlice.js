import { createSlice } from "@reduxjs/toolkit";
import { storeMark, fetchBookmarks } from "../actions/bookmarkAction";

const bookmarkSlice = createSlice({
  name: "bookmarks",
  initialState: {
    bookmarks: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
  },
});

export default bookmarkSlice.reducer;
