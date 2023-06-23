import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = { isLoader: false };

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    isLoaderVisible: (state, action) => {
      state.isLoader = action.payload;
    },
    isLoaderDisable: (state, action) => {
      state.isLoader = false;
    },
  },
});

export const { isLoaderVisible, isLoaderDisable } = counterSlice.actions;
export default counterSlice.reducer;
