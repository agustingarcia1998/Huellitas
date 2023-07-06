import { createSlice } from "@reduxjs/toolkit";

const dogsSlice = createSlice({
  name: "dogs",
  initialState: {
    currentDog: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    startDogs: (state, action) => {
      state.isFetching = true;
    },

    successDogs: (state, action) => {
      state.isFetching = false;
      state.currentDog = action.payload;
    },

    errorDogs: (state, action) => {
      state.error = true;
    },
  },
});

export const { startDogs, successDogs, errorDogs } = dogsSlice.actions;
export default dogsSlice.reducer;
