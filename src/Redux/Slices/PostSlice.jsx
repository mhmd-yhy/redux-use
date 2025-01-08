// PostSlice.jsx

import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  postsData: [],
  isLoading: false,
};

const PostSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    /* case reducers here */
  },
  extraReducers(builder) {
    builder
      .addCase(getAllPosts.pending, (state, action) => {
        console.log(state, action);
        state.isLoading = true;
      })
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.postsData = action.payload;
        console.log("this is extraReducers");
        console.log(state.postsData);
      })
      .addCase(getAllPosts.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const getAllPosts = createAsyncThunk("posts/getAllPosts", async () => {
  console.log("calling fetch weather");
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  console.log(res.data);
  return res.data;
});

export default PostSlice.reducer;
