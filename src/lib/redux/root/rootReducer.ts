import { combineReducers } from 'redux';
import RouteSlice from '../route/routeSlice';

export const rootReducer = combineReducers({
  routes: RouteSlice,
});
