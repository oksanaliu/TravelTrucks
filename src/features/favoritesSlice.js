import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    toggleFavorite: (state, action) => {
      const index = state.indexOf(action.payload);
      if (index === -1) {
        state.push(action.payload);
      } else {
        state.splice(index, 1);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
