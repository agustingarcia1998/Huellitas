import {
persistStore,
persistReducer,
FLUSH,
REHYDRATE,
PAUSE,
PERSIST,
PURGE,
REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import usersSlice from './Slices/users.slice'
import catsSlice from './Slices/cats.slice'
import dogsSlice from './Slices/dogs.slice'


const persistConfig = {
    key: "root",
    version: 1,
    storage,
  };
  
  const rootReducer = combineReducers({
        cats: catsSlice,
        dogs: dogsSlice,
        users: usersSlice
  });
  
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  
  export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
        immutableCheck: { warnAfter: 128 },
      }),
  });
  
  export let persistor = persistStore(store);