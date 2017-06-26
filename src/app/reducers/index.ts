import {combineReducers} from '@ngrx/store';
import userReducer from './user';

const reducers = {
  user: userReducer
};

const appReducer = combineReducers(reducers);

export function reducer(state: any, action: any) {
  return appReducer(state, action);
}
