import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  urlList: [],
  selectedUrl: null
};

export const urlSlice = createSlice({
  name: "url",
  initialState,
  reducers: {
    getAllUrls: (state, action) => {
      state.urlList = action.payload;
    },
    addUrl: (state, action) => {
      state.urlList = [...state.urlList, action.payload];
    },
    deleteUrlReducer: (state, action) => {
      state.urlList = state.urlList.filter((url) => url.id !== action.payload.id);
    },
    getUrlById: (state, action) => {
      state.selectedUrl = action.payload;
    },
  },
});

export const {
  getAllUrls,
  addUrl,
  deleteUrlReducer,
  getUrlById,
} = urlSlice.actions;

export default urlSlice.reducer;
