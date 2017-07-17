import { Action } from '@ngrx/store';
import { type } from '../util';

export const ActionTypes = {
  GET_LIST: type('[Activities] Get List'),
  GET_LIST_FAILURE: type('[Activities] Get List Failure'),
  GET_LIST_SUCCESS: type('[Activities] Get List Success'),
  GET_TOURS: type('[Activities] Get Tours'),
  GET_TOURS_SUCCESS: type('[Activities] Get Tours Success'),
  GET_TOURS_FAILURE: type('[Activities] Get Tours Failure'),
  GET_DETAIL: type('[Activities] Get Detail'),
  GET_DETAIL_FAILURE: type('[Activities] Get Detail Failure'),
  GET_DETAIL_SUCCESS: type('[Activities] Get Detail Success')
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

export class GetTours implements Action {
  type = ActionTypes.GET_TOURS;
  constructor(public payload: any) { }
}

export class GetToursFailure implements Action {
  type = ActionTypes.GET_TOURS_FAILURE;
  constructor(public payload: any) { }
}

export class GetToursSuccess implements Action {
  type = ActionTypes.GET_TOURS_SUCCESS;
  constructor(public payload: any) { }
}

export class GetDetail implements Action {
  type = ActionTypes.GET_DETAIL;
  constructor(public payload: any) { }
}

export class GetDetailFailure implements Action {
  type = ActionTypes.GET_DETAIL_FAILURE;
  constructor(public payload: any) { }
}

export class GetDetailSuccess implements Action {
  type = ActionTypes.GET_DETAIL_SUCCESS;
  constructor(public payload: any) { }
}

export type Actions = GetList | GetListFailure | GetListSuccess |
GetDetail | GetDetailFailure | GetDetailSuccess | GetTours | GetToursFailure | GetToursSuccess;

