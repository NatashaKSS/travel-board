import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INITIAL_STATE } from './travel.initialState';

/**
 * The slice   reducer for the part of state that represents the logged in user.
 * Contains the management of user information.
 */
const travelSlice = createSlice({
  name: 'travel',
  initialState: INITIAL_STATE,
  reducers: {
    setFromStation: (state, action: PayloadAction<string>) => {
      state.selectedFromStation = action.payload;
    },
    setToStation: (state, action: PayloadAction<string>) => {
      state.selectedToStation = action.payload;
    },
    swapStations: (state) => {
      const from = state.selectedFromStation;
      const to = state.selectedToStation;
      state.selectedFromStation = to;
      state.selectedToStation = from;
    },
  },
});

export const { setFromStation, setToStation, swapStations } = travelSlice.actions;

export default travelSlice.reducer;
