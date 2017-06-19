import { Action } from '@ngrx/store';

import { type } from '../util';

export const ActionTypes = {
  LOAD_USER: type('[User] Load')
};

export class LoadUser implements Action {
  type = ActionTypes.LOAD_USER;
  constructor(public payload: any) { }
}

export type Actions = LoadUser;
