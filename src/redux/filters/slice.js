import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "",
};

export const slice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFiter: (state, action) => {
      state.text = action.payload;
    },
  },
});

export default slice.reducer; // змінено на default експорт
export const { changeFiter } = slice.actions;
