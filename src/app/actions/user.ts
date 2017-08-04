import { Action } from '@ngrx/store';

import { type } from '../util';

export const ActionTypes = {
  CREATE_USER: type('[User] Create'),
  CREATE_USER_SUCCESS: type('[User] Create success'),
  CREATE_USER_FAILURE: type('[User] Create failure'),
  LOAD_USER: type('[User] Load'),
  GET_USER_BASIC_DATA: type('[User] Get Basic Data'),
  GET_USER_BASIC_DATA_SUCCESS: type('[User] Get Basic Data Success'),
  GET_USER_BASIC_DATA_FAILURE: type('[User] Get Basic Data Failure'),
  ASK_USER_FOR_DISCOUNT_CARD: type('[User] Ask user for discount card'),
  ASK_USER_FOR_SUBSCRIPTION: type('[User] Ask user for subscription'),
  ASK_USER_FOR_AUTH: type('[User] ask for Auth')
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

export class GetUserBasicData implements Action {
  type = ActionTypes.GET_USER_BASIC_DATA;
  constructor(public payload: any) {}
}

export class GetUserBasicDataSuccess implements Action {
  type = ActionTypes.GET_USER_BASIC_DATA_SUCCESS;
  constructor(public payload: any) {}
}

export class GetUserBasicDataFailure implements Action {
  type = ActionTypes.GET_USER_BASIC_DATA_FAILURE;
  constructor(public payload: any) {}
}

export type Actions = LoadUser | CreateUser | CreateUserFailure | CreateUserSuccess | GetUserBasicData
  | GetUserBasicDataSuccess | GetUserBasicDataFailure;
