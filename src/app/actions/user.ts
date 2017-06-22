import { Action } from '@ngrx/store';

import { type } from '../util';

export const ActionTypes = {
  LOAD_USER: type('[User] Load'),
  LOGIN_WITH_EMAIL: type('[User] Login with email'),
  LOGIN_WITH_EMAIL_SUCCESS: type('[User] Login with email success'),
  LOGIN_WITH_EMAIL_FAILURE: type('[User] Login with email failure')
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


export type Actions = LoadUser | LoginWithEmail | LoginWithEmailFailure | LoginWithEmailSuccess;
