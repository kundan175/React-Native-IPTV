import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = { isLoader: false, comingModal: false };

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
    iscomingModalOpen: (state, action) => {
      state.comingModal = !state.comingModal;
    },
  },
});

export const { isLoaderVisible, isLoaderDisable, iscomingModalOpen } =
  counterSlice.actions;
export default counterSlice.reducer;
