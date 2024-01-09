import {combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./products/productSlice";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  products: productReducer
})

const persistConfig = {
  key : "root",
  storage,
  version : 1
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware : (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck : false,
  }),
  
});

export const persistor = persistStore(store)
