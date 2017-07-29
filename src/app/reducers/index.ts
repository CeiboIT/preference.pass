import {combineReducers} from '@ngrx/store';
import userReducer from './auth';
import activitiesReducer from './activities';
import subscriptionReducer from './subscription';

const reducers = {
  user: userReducer,
  activities: activitiesReducer,
  subscription: subscriptionReducer
};

const appReducer = combineReducers(reducers);

export function reducer(state: any, action: any) {
  return appReducer(state, action);
}
