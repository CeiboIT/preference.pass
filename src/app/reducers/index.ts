import {combineReducers} from '@ngrx/store';
import userReducer from './user';
import activitiesReducer from './activities';

const reducers = {
  user: userReducer,
  activities: activitiesReducer
};

const appReducer = combineReducers(reducers);

export function reducer(state: any, action: any) {
  return appReducer(state, action);
}
