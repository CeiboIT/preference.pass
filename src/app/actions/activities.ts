import { Action } from '@ngrx/store';

import { type } from '../util';

export const ActionTypes = {
  GET_LIST: type('[Activities] Get List'),
  GET_LIST_FAILURE: type('[Activities] Get List Failure'),
  GET_LIST_SUCCESS: type('[Activities] Get List Success')
};

export class GetList implements Action {
  type = ActionTypes.GET_LIST;
  constructor(public payload: any) { }
}

export class GetListFailure implements Action {
  type = ActionTypes.GET_LIST_FAILURE;
  constructor(public payload: any) { }
}

export class GetListSuccess implements Action {
  type = ActionTypes.GET_LIST_SUCCESS;
  constructor(public payload: any) { }
}

export type Actions = GetList | GetListFailure | GetListSuccess;

