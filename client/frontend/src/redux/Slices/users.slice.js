import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    userSuccess: null,
    isfetching: false,
    error: false,
  },
  reducers: {},
});

export const {} = usersSlice.actions;
export default usersSlice.reducer;
