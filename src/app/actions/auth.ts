import { Action } from '@ngrx/store';

import { type } from '../util';
export const ActionTypes = {
  LOGIN_WITH_EMAIL: type('[User] Login with email'),
  LOGIN_WITH_EMAIL_SUCCESS: type('[User] Login with email success'),
  LOGIN_WITH_EMAIL_FAILURE: type('[User] Login with email failure'),
  LOGIN_WITH_EMAIL_AND_PASSWORD: type('[User] Login with email and password'),
  LOGIN_WITH_EMAIL_AND_PASSWORD_FAILURE: type('[User] Login with email and password failure'),
  LOGIN_WITH_EMAIL_AND_PASSWORD_SUCCESS: type('[User] Login with email and password success'),
  REGISTER_WITH_EMAIL_AND_PASSWORD: type('[User] Register with email and password'),
  REGISTER_WITH_EMAIL_AND_PASSWORD_SUCCESS: type('[User] Register with email and password success'),
  REGISTER_WITH_EMAIL_AND_PASSWORD_FAILURE: type('[User] Register with email and password failure'),
  REGISTER_WITH_FACEBOOK: type('[User] Register with Facebook'),
  REGISTER_WITH_FACEBOOK_FAILURE: type('[User] Register with Facebook Failure'),
  REGISTER_WITH_FACEBOOK_SUCCESS: type('[User] Register with Facebook Success'),
  REGISTER_WITH_GOOGLE: type('[User] Register with Google'),
  REGISTER_WITH_GOOGLE_FAILURE: type('[User] Register with Google Failure'),
  REGISTER_WITH_GOOGLE_SUCCESS: type('[User] Register with Google Success'),
};

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

export type Actions =  LoginWithEmail | LoginWithEmailFailure | LoginWithEmailSuccess |
RegisterWithEmailAndPassword | RegisterWithEmailAndPasswordFailure | RegisterWithEmailAndPasswordSuccess;


