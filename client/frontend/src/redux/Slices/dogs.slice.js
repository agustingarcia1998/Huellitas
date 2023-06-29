import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    age: "",
    description: "",
    size: "",
    thumbnail: ""
};

const dogsSlice = createSlice({
    name: "dogs",
    initialState,
    reducers: {
        addDog: (state, action) => {
            const {name, age, description, size} = action.payload;
            //estos state, son los que llegan por payload
            state.name = name;
            state.age = age;
            state.description = description;
            state.size = size;
        },

        updateDog: (state, action) => {
            const {id, newData} = action.payload;
            const dogUpdate = state.dogs.find(d => d.id === id);
            if (dogUpdate) {
                Object.assign(dogUpdate, newData);
            }
        },

        deleteDog: (state, action) => {
            const dogId = action.payload;
            state.dogs = state.dogs.filter(d => d.id !== dogId);
        },
        
        

    }
});

export const { addDog, updateDog, deleteDog } = dogsSlice.actions;
export default dogsSlice.reducer;