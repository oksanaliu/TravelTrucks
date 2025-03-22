import { configureStore } from '@reduxjs/toolkit';
import campersReducer from './campersSlice';
import favoritesReducer from './favoritesSlice';
import filtersReducer from './filtersSlice';
import savedReducer from './savedSlice';

const store = configureStore({
  reducer: {
    campers: campersReducer,
    favorites: favoritesReducer,
    filters: filtersReducer,
    saved: savedReducer,
  },
});

export default store;
