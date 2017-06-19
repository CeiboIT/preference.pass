import { Action } from '@ngrx/store';

import { type } from '../util';

export const ActionTypes = {
  OPEN_LOGIN: type('[Layout] Open Login'),
  OPEN_REGISTER: type('[Layout] Open Register'),
};

export class OpenLogin implements Action {
  type = ActionTypes.OPEN_LOGIN;
  constructor(public payload: any) { }
}
export class OpenRegister implements Action {
  type = ActionTypes.OPEN_REGISTER;
  constructor(public payload: any) { }
}

export type Actions = OpenLogin | OpenRegister;
