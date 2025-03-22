import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    searchTerm: '',
    selectedFilters: {},
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setFilters: (state, action) => {
      state.selectedFilters = action.payload;
    },
  },
});

export const { setSearchTerm, setFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
