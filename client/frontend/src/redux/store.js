import { configureStore } from '@reduxjs/toolkit'
import usersSlice from './Slices/users.slice'
import catsSlice from './Slices/cats.slice'
import dogsSlice from './Slices/dogs.slice'

export const store = configureStore({
    reducer: {
        cats: catsSlice,
        dogs: dogsSlice,
        users: usersSlice
    }
})