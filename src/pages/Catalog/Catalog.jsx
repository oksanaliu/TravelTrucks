import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCampers, getCamperById } from '../../services/api';
export const fetchCampers = createAsyncThunk(
  'campers/fetchCampers',
  async () => {
    return await getCampers();
  }
);

export const fetchCamperDetails = createAsyncThunk(
  'campers/fetchCamperDetails',
  async (id) => {
    return await getCamperById(id);
  }
);

const campersSlice = createSlice({
  name: 'campers',
  initialState: { campers: [], camperDetails: {}, status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.campers = action.payload;
      })
      .addCase(fetchCampers.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(fetchCamperDetails.fulfilled, (state, action) => {
        state.camperDetails = action.payload;
      });
  },
});

export default campersSlice.reducer;
