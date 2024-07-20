import { configureStore } from "@reduxjs/toolkit";
import likedReducer from "./slices/liked-slice";

const store = configureStore({
  reducer: {
    liked: likedReducer,
  },
});

export default store;
