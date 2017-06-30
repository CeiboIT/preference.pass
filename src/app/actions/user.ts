import { Action } from '@ngrx/store';

import { type } from '../util';

export const ActionTypes = {
  CREATE_USER: type('[User] Create'),
  CREATE_USER_SUCCESS: type('[User] Create success'),
  CREATE_USER_FAILURE: type('[User] Create failure'),
  LOAD_USER: type('[User] Load')
};

export class LoadUser implements Action {
  type = ActionTypes.LOAD_USER;
  constructor(public payload: any) { }
}

export class CreateUser implements Action {
  type = ActionTypes.CREATE_USER;
  constructor(public payload: any) {}
}

export class CreateUserFailure implements Action {
  type = ActionTypes.CREATE_USER_FAILURE;
  constructor(public payload: any) {}
}

export class CreateUserSuccess implements Action {
  type = ActionTypes.CREATE_USER_SUCCESS;
  constructor(public payload: any) {}
}

export type Actions = LoadUser | CreateUser | CreateUserFailure | CreateUserSuccess;
