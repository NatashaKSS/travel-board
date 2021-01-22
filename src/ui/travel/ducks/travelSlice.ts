import { createSlice } from '@reduxjs/toolkit';
// import { TravelState } from './travel.types';
import { INITIAL_STATE } from './travel.initialState';

/**
 * The slice   reducer for the part of state that represents the logged in user.
 * Contains the management of user information.
 */
const travelSlice = createSlice({
  name: 'travel',
  initialState: INITIAL_STATE,
  reducers: {},
});

// export const {} = travelSlice.actions;

export default travelSlice.reducer;
