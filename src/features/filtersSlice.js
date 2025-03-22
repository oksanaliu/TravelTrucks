import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    searchTerm: '',
    selectedEquipment: [],
    vehicleType: '',
  },
  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    toggleEquipmentFilter(state, action) {
      const equipment = action.payload;
      if (state.selectedEquipment.includes(equipment)) {
        state.selectedEquipment = state.selectedEquipment.filter(
          (item) => item !== equipment
        );
      } else {
        state.selectedEquipment.push(equipment);
      }
    },
    setVehicleType(state, action) {
      state.vehicleType = action.payload;
    },
    clearFilters(state) {
      state.searchTerm = '';
      state.selectedEquipment = [];
      state.vehicleType = '';
    },
  },
});

export const {
  setSearchTerm,
  toggleEquipmentFilter,
  setVehicleType,
  clearFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;
