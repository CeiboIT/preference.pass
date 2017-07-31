import { Action } from '@ngrx/store';

import { type } from '../util';
export const ActionTypes = {
  LOGIN_WITH_EMAIL: type('[Auth] Login with email'),
  LOGIN_WITH_EMAIL_SUCCESS: type('[Auth] Login with email success'),
  LOGIN_WITH_EMAIL_FAILURE: type('[Auth] Login with email failure'),
  LOGIN_WITH_EMAIL_AND_PASSWORD: type('[Auth] Login with email and password'),
  LOGIN_WITH_FACEBOOK: type('[Auth] Login with Facebook'),
  LOGIN_WITH_FACEBOOK_SUCCESS: type('[Auth] Login with Facebook Success'),
  LOGIN_WITH_FACEBOOK_FAILURE: type('[Auth] Login with Facebook Failure'),
  LOGIN_WITH_GOOGLE: type('[Auth] Login with Google'),
  LOGIN_WITH_GOOGLE_SUCCESS: type('[Auth] Login with Google Success'),
  LOGIN_WITH_GOOGLE_FAILURE: type('[Auth] Login with Google Failure'),
  LOGIN_WITH_EMAIL_AND_PASSWORD_FAILURE: type('[Auth] Login with email and password failure'),
  LOGIN_WITH_EMAIL_AND_PASSWORD_SUCCESS: type('[Auth] Login with email and password success'),
  REGISTER_WITH_EMAIL_AND_PASSWORD: type('[Auth] Register with email and password'),
  REGISTER_WITH_EMAIL_AND_PASSWORD_SUCCESS: type('[Auth] Register with email and password success'),
  REGISTER_WITH_EMAIL_AND_PASSWORD_FAILURE: type('[Auth] Register with email and password failure'),
  REGISTER_WITH_FACEBOOK: type('[Auth] Register with Facebook'),
  REGISTER_WITH_FACEBOOK_FAILURE: type('[Auth] Register with Facebook Failure'),
  REGISTER_WITH_FACEBOOK_SUCCESS: type('[Auth] Register with Facebook Success'),
  REGISTER_WITH_GOOGLE: type('[Auth] Register with Google'),
  REGISTER_WITH_GOOGLE_FAILURE: type('[Auth] Register with Google Failure'),
  REGISTER_WITH_GOOGLE_SUCCESS: type('[Auth] Register with Google Success'),
  LOGOUT: type('[Auth] Logout'),
  LOGOUT_SUCCESS: type('[Auth] Logout Success'),
  LOGOUT_FAILURE: type('[Auth] Logout Failure'),
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

export class LoginWithFacebook implements Action {
  type = ActionTypes.LOGIN_WITH_FACEBOOK;
  constructor(public payload: any) { }
}

export class LoginWithFacebookSuccess implements Action {
  type = ActionTypes.LOGIN_WITH_FACEBOOK_SUCCESS;
  constructor(public payload: any) { }
}
export class LoginWithFacebookFailure implements Action {
  type = ActionTypes.LOGIN_WITH_FACEBOOK_FAILURE;
  constructor(public payload: any) { }
}

export class LoginWithGoogle implements Action {
  type = ActionTypes.LOGIN_WITH_GOOGLE;
  constructor(public payload: any) { }
}

export class LoginWithGoogleSuccess implements Action {
  type = ActionTypes.LOGIN_WITH_GOOGLE_SUCCESS;
  constructor(public payload: any) { }
}

export class LoginWithGoogleFailure implements Action {
  type = ActionTypes.LOGIN_WITH_GOOGLE_FAILURE;
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

export class RegisterWithGoogle implements Action {
  type = ActionTypes.REGISTER_WITH_GOOGLE;
  constructor(public payload: any) {};
}

export class RegisterWithFacebook implements Action {
  type = ActionTypes.REGISTER_WITH_FACEBOOK;
  constructor(public payload: any) {};
}

export class RegisterWithFacebookSuccess implements Action {
  type = ActionTypes.REGISTER_WITH_FACEBOOK_SUCCESS;
  constructor(public payload: any) {};
}
export class RegisterWithFacebookFailure implements Action {
  type = ActionTypes.REGISTER_WITH_FACEBOOK_FAILURE;
  constructor(public payload: any) {};
}

export class AuthLogOut implements Action {
  type = ActionTypes.LOGOUT;
  constructor(public payload: any) {};
}

export class AuthLogOutSuccess implements Action {
  type = ActionTypes.LOGOUT_SUCCESS;
  constructor(public payload: any) {};
}

export class AuthLogOutFailure implements Action {
  type = ActionTypes.LOGOUT_FAILURE;
  constructor(public payload: any) {};
}

export type Actions = LoginWithEmail | LoginWithEmailFailure | LoginWithEmailSuccess |
RegisterWithEmailAndPassword | RegisterWithEmailAndPasswordFailure | RegisterWithEmailAndPasswordSuccess |
  RegisterWithGoogle | RegisterWithFacebook | LoginWithFacebook | LoginWithFacebookSuccess| LoginWithFacebookFailure |
  LoginWithGoogle | LoginWithGoogleSuccess | LoginWithGoogleFailure | AuthLogOut | AuthLogOutSuccess | AuthLogOutFailure ;
