import { Action } from '@ngrx/store';

import { type } from '../util';

export const ActionTypes = {
  CREATE_USER: type('[User] Create'),
  CREATE_USER_SUCCESS: type('[User] Create success'),
  CREATE_USER_FAILURE: type('[User] Create failure'),
  LOAD_USER: type('[User] Load'),
  LOGIN_WITH_EMAIL: type('[User] Login with email'),
  LOGIN_WITH_EMAIL_SUCCESS: type('[User] Login with email success'),
  LOGIN_WITH_EMAIL_FAILURE: type('[User] Login with email failure'),
  REGISTER_WITH_EMAIL_AND_PASSWORD: type('[User] Register with email and password'),
  REGISTER_WITH_EMAIL_AND_PASSWORD_SUCCESS: type('[User] Register with email and password success'),
  REGISTER_WITH_EMAIL_AND_PASSWORD_FAILURE: type('[User] Register with email and password failure'),
};

export class LoadUser implements Action {
  type = ActionTypes.LOAD_USER;
  constructor(public payload: any) { }
}

export class LoginWithEmail implements Action {
  type = ActionTypes.LOGIN_WITH_EMAIL;
  constructor(public payload: any) { }
}
export class LoginWithEmailSuccess implements Action {
  type = ActionTypes.LOGIN_WITH_EMAIL_SUCCESS;
  constructor(public payload: any) { }
}
export class LoginWithEmailFailure implements Action {
  type = ActionTypes.LOGIN_WITH_EMAIL_FAILURE;
  constructor(public payload: any) { }
}

export class RegisterWithEmailAndPassword implements Action {
  type = ActionTypes.REGISTER_WITH_EMAIL_AND_PASSWORD;
  constructor(public payload: any) { }
}
export class RegisterWithEmailAndPasswordFailure implements Action {
  type = ActionTypes.REGISTER_WITH_EMAIL_AND_PASSWORD_FAILURE;
  constructor(public payload: any) { }
}
export class RegisterWithEmailAndPasswordSuccess implements Action {
  type = ActionTypes.REGISTER_WITH_EMAIL_AND_PASSWORD_SUCCESS;
  constructor(public payload: any) { }
}


export type Actions = LoadUser | LoginWithEmail | LoginWithEmailFailure | LoginWithEmailSuccess |
  RegisterWithEmailAndPassword | RegisterWithEmailAndPasswordFailure | RegisterWithEmailAndPasswordSuccess;
