import { createSlice } from "@reduxjs/toolkit";

const cratePetSlice = createSlice({
    name: "createPet",
    initialState: {
      currentPet: null,
      isfetching: false,
      error: false,
    },
    reducers: {
      startCreatePet: (state, action) => {
        state.isfetching = true;
      },
  
      successCreatePet: (state, action) => {
        state.isfetching = false;
        state.currentPet = action.payload;
      },
  
      errorCreatePet: (state, action) => {
        state.error = true;
      },
    },
  });
  
  export const { startCreatePet, successCreatePet, errorCreatePet } = cratePetSlice.actions;
  export default cratePetSlice.reducer;
  