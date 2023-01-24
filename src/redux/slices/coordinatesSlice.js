import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCoordinates = createAsyncThunk('coordinates/fetchCoordinates', async () => {
  const { data } = await axios.get('https://63c3e170a9085635752daa33.mockapi.io/coordinats'); //данные таблицы лежат на сервисе фейк апи "moackapi"

  return data;
});

const initialState = {
  coordinates: [],
  status: 'loading', // loading | success | error
};

const coordinatSlice = createSlice({
  name: 'coordinates',
  initialState,
  extraReducers: {
    [fetchCoordinates.pending]: (state) => {
      state.status = 'loading';
      state.coordinates = [];
    },
    [fetchCoordinates.fulfilled]: (state, action) => {
      state.coordinates = action.payload;
      state.status = 'success';
    },
    [fetchCoordinates.rejected]: (state) => {
      state.status = 'error';
      state.coordinates = [];
    },
  },
});

export default coordinatSlice.reducer;
