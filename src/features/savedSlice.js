import { createSlice } from '@reduxjs/toolkit';

const savedSlice = createSlice({
  name: 'saved',
  initialState: {
    campers: [],
  },
  reducers: {
    addToSaved: (state, action) => {
      state.campers.push(action.payload);
    },
    removeFromSaved: (state, action) => {
      state.campers = state.campers.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addToSaved, removeFromSaved } = savedSlice.actions;
export default savedSlice.reducer;
