import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './initialState';

/**
 * The slice reducer for the part of state that represents route management.
 */
const routeSlice = createSlice({
  name: 'routes',
  initialState,
  reducers: {
    initialize(state, action: PayloadAction<{}>) {},
  },
});

export const { initialize } = routeSlice.actions;
export default routeSlice.reducer;
