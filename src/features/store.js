import { configureStore } from '@reduxjs/toolkit';
import campersReducer from './campersSlice';
import favoritesReducer from './favoritesSlice';
import filtersReducer from './filtersSlice';

const store = configureStore({
  reducer: {
    campers: campersReducer,
    favorites: favoritesReducer,
    filters: filtersReducer,
  },
});

export default store;
