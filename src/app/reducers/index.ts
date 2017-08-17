import {combineReducers} from '@ngrx/store';
import authUserReducer from './auth';
import activitiesReducer from './activities';
import subscriptionReducer from './subscription';
import bookingReducer from './booking';

const reducers = {
  auth: authUserReducer ,
  activities: activitiesReducer,
  subscription: subscriptionReducer,
  booking: bookingReducer
};

const appReducer = combineReducers(reducers);

export function reducer(state: any, action: any) {
  return appReducer(state, action);
}
