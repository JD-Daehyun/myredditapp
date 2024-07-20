import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const likedSlice = createSlice({
  name: "liked",
  initialState,
  reducers: {
    addToLiked(state, action) {
      state.push(action.payload);
      
    },
    removeFromLiked(state,action){
        return state.filter((item) => item.id !== action.payload);
        console.log(state);
    }
  },
});


export const { addToLiked,removeFromLiked } = likedSlice.actions;
export default likedSlice.reducer;