import { Action } from '@ngrx/store';

import { type } from '../util';

export const ActionTypes = {
  TO_LANDING: type('[Routing] Navigate to Landing'),
  TO_INTRODUCE_CARD: type('[Routing] Navigate to introduce card'),
};

export class ToLanding implements Action {
  type = ActionTypes.TO_LANDING;
  constructor(public payload: any) { }
}
export class ToIntroduceCard implements Action {
  type = ActionTypes.TO_INTRODUCE_CARD;
  constructor(public payload: any) { }
}

export type Actions = ToLanding | ToIntroduceCard;
