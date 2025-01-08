import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const DeneSlice = createSlice({
  name: "YourSlice",
  initialState: {value: ""},
  reducers: {
    oneReducer: (state, action) => {
      state.value = "Muhammed";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getMyValue.pending, (state, action) => {
        console.log(state, action);
      })
      .addCase(getMyValue.fulfilled, (state, action) => {
        console.log("oldu");
      });
  },
});

export const getMyValue = createAsyncThunk("MySelf/Get", async () => {
  const api = await axios.get("muhammedyahyazx@gmail.com");
  return api.data;
});

export const {oneReducer} = DeneSlice.actions;
export default DeneSlice;
