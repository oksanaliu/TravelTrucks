import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCampers, getCamperById } from '../services/api';

export const fetchCampers = createAsyncThunk(
  'campers/fetchCampers',
  async (_, { rejectWithValue }) => {
    try {
      return await getCampers();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCamperDetails = createAsyncThunk(
  'campers/fetchCamperDetails',
  async (id, { rejectWithValue }) => {
    try {
      return await getCamperById(id);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const campersSlice = createSlice({
  name: 'campers',
  initialState: { campers: [], camperDetails: {}, status: 'idle', error: null },
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
      .addCase(fetchCampers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(fetchCamperDetails.fulfilled, (state, action) => {
        state.camperDetails = action.payload;
      })
      .addCase(fetchCamperDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default campersSlice.reducer;
