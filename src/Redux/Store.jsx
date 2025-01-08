// Store.jsx

import {configureStore} from "@reduxjs/toolkit";
import MySlice from "./MySlice";
import PostSlice from "./Slices/PostSlice";
import DeneSlice from "./Slices/DeneSlice";

export const store = configureStore({
  reducer: {
    counter: MySlice,
    PostSlice: PostSlice,
    DeneSlice: DeneSlice,
  },
});
