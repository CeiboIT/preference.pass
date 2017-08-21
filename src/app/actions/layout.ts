import { Action } from '@ngrx/store';
import { type } from '../util';

export const ActionTypes = {
  OPEN_LOGIN: type('[Layout] Open Login'),
  OPEN_REGISTER: type('[Layout] Open Register'),
  OPEN_CARD_INTRODUCTION: type('[Layout] Open Card'),
  OPEN_ON_BOARDING: type('[Layout] Open On boarding'),
  OPEN_ALERT: type('[Layout] Open Alert')
};

export class OpenLogin implements Action {
  type = ActionTypes.OPEN_LOGIN;
  constructor(public payload: any) { }
}
export class OpenRegister implements Action {
  type = ActionTypes.OPEN_REGISTER;
  constructor(public payload: any) { }
}

export class OpenCardIntroduction implements Action {
  type = ActionTypes.OPEN_CARD_INTRODUCTION;
  constructor(public payload: any) {}
}

export class OpenOnBoarding implements Action {
  type = ActionTypes.OPEN_ON_BOARDING;
  constructor(public payload: any) {}
}

export class OpenAlert implements Action {
  type = ActionTypes.OPEN_ALERT;
  constructor(public payload: any) {}
}

export type Actions = OpenLogin | OpenRegister | OpenCardIntroduction | OpenOnBoarding | OpenAlert;
