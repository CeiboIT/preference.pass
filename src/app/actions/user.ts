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
  ASK_USER_FOR_AUTH: type('[User] ask for Auth'),
  ADD_COMPANION: type('[User] Add Companion'),
  ADD_COMPANION_SUCCESS: type('[User] Add Companion Success'),
  ADD_COMPANION_FAILURE: type('[User] Add Companion Failure'),
  ADD_COMPANIONS: type('[User] Add Companions'),
  ADD_COMPANIONS_SUCCESS: type('[User] Add Companions Success'),
  ADD_COMPANIONS_FAILURE: type('[User] Add Companions Failure'),
  GET_USER_COMPANIONS: type('[User] Get companions'),
  GET_USER_COMPANIONS_FAILURE: type('[User] Get companions Failure'),
  GET_USER_COMPANIONS_SUCCESS: type('[User] Get companions Success'),
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

export class AddCompanion implements Action {
  type = ActionTypes.ADD_COMPANION;
  constructor(public payload: any) {}
}

export class AddCompanionSuccess implements Action {
  type = ActionTypes.ADD_COMPANION_SUCCESS;
  constructor(public payload: any) {}
}

export class AddCompanionFailure implements Action {
  type = ActionTypes.ADD_COMPANION_FAILURE;
  constructor(public payload: any) {}
}


export class AddCompanions implements Action {
  type = ActionTypes.ADD_COMPANIONS;
  constructor(public payload: any) {}
}

export class AddCompanionsSuccess implements Action {
  type = ActionTypes.ADD_COMPANIONS_SUCCESS;
  constructor(public payload: any) {}
}

export class AddCompanionsFailure implements Action {
  type = ActionTypes.ADD_COMPANIONS_FAILURE;
  constructor(public payload: any) {}
}

export class GetUserCompanions implements Action {
  type = ActionTypes.GET_USER_COMPANIONS;
  constructor(public payload: any) {}
}

export class GetUserCompanionsSuccess implements Action {
  type = ActionTypes.GET_USER_COMPANIONS_SUCCESS;
  constructor(public payload: any) {}
}

export class GetUserCompanionsFailure implements Action {
  type = ActionTypes.GET_USER_COMPANIONS_FAILURE;
  constructor(public payload: any) {}
}

export type Actions = LoadUser | CreateUser | CreateUserFailure | CreateUserSuccess | GetUserBasicData
  | GetUserCompanions | GetUserCompanionsSuccess | GetUserCompanionsFailure
  | GetUserBasicDataSuccess | GetUserBasicDataFailure | AddCompanion | AddCompanions | AddCompanionFailure | AddCompanionSuccess;
