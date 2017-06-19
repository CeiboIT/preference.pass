import {combineReducers} from '@ngrx/store';
const reducers = {};

const appReducer = combineReducers(reducers);

export function reducer(state: any, action: any) {
  return appReducer(state, action);
}
