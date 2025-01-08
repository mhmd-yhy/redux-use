import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initial = {
  count: 1,
  name: "Muhammed",
  posts: [],
};

const MySlice = createSlice({
  name: "counter",
  initialState: initial,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    setMyName: (state, action) => {
      state.name = action.payload;
    },
    getPosts: (state) => {
      state.posts = axios.get("https://jsonplaceholder.typicode.com/posts");
    },
  },
});

export const {increment, decrement, setMyName, getPosts} = MySlice.actions;
export default MySlice.reducer;
