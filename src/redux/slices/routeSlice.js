import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  route: [],
  activeRow: null,
  isLoading: false,
};

const routeSlice = createSlice({
  name: 'route',
  initialState,
  reducers: {
    getRouteFetch: (state, action) => {
      state.activeRow = action.payload;
      state.isLoading = true;
    },
    getRouteSucces: (state, action) => {
      state.route = action.payload;
      state.isLoading = false;
    },
  },
});

export const { getRouteSucces, getRouteFetch } = routeSlice.actions;

export default routeSlice.reducer;
