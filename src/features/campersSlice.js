import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCampers, getCamperById } from '../services/api';

export const fetchCampers = createAsyncThunk(
  'campers/fetchCampers',
  async (_, thunkAPI) => {
    try {
      const data = await getCampers();
      console.log('>>> fetchCampers thunk data:', data); // консоль
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCamperDetails = createAsyncThunk(
  'campers/fetchCamperDetails',
  async (id, thunkAPI) => {
    try {
      const data = await getCamperById(id);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    campers: [],
    camperDetails: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.status = 'loading';
        state.error = null;
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
      });
  },
});

export default campersSlice.reducer;
