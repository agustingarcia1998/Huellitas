import { createSlice } from "@reduxjs/toolkit";

const catsSlice = createSlice({
  name: "cats",
  initialState: {
    currentCat: null,
    isfetching: false,
    error: false,
  },
  reducers: {
    startCats: (state, action) => {
      state.isfetching = true;
    },

    successCats: (state, action) => {
      state.isfetching = false;
      state.currentCat = action.payload;
    },

    errorCats: (state, action) => {
      state.error = true;
    },
  },
});

export const { startCats, successCats, errorCats } = catsSlice.actions;
export default catsSlice.reducer;
