import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: " ",
    password: " "
};

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state, action) => {
            const { username, password } = action.payload;
            state.username = username;
            state.password = password;
        },
    }
});

export const { addUser } = usersSlice.actions;
export default usersSlice.reducer;
