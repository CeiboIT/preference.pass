import {combineReducers} from '@ngrx/store';
import authUserReducer from './auth';
import activitiesReducer from './activities';
import subscriptionReducer from './subscription';
import bookingReducer from './booking';
import userReducer from './user';
const reducers = {
  auth: authUserReducer ,
  activities: activitiesReducer,
  subscription: subscriptionReducer,
  booking: bookingReducer,
  user: userReducer
};

const appReducer = combineReducers(reducers);

export function reducer(state: any, action: any) {
  return appReducer(state, action);
}
