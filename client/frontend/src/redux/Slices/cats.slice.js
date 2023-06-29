import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    age: "",
    description: "",
    size: "",
    thumbnail: ""
};

const catsSlice = createSlice({
    name: "cats",
    initialState,
    reducers: {
        addCat: (state, action) => {
            const {name, age, description, size} = action.payload;
            //estos state, son los que llegan por payload
            state.name = name;
            state.age = age;
            state.description = description;
            state.size = size;
        },

        updateCat: (state, action) => {
            const {id, newData} = action.payload;
            const catUpdate = state.cats.find(cat => cat.id === id);
            if (catUpdate) {
                Object.assign(catUpdate, newData);
            }
        },

        deleteCat: (state, action) => {
            const catId = action.payload;
            state.cats = state.cats.filter(c => c.id !== catId);
        },

        

    }
});

export const { addCat, updateCat, deleteCat } = catsSlice.actions;
export default catsSlice.reducer;