import { combineReducers } from 'redux';
import TravelSlice from 'ui/travel/ducks/travelSlice';

export const rootReducer = combineReducers({
  travel: TravelSlice,
});
