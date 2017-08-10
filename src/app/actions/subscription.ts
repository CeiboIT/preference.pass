import { Action } from '@ngrx/store';
import { type } from '../util';

export const ActionTypes = {
  POST_SUBSCRIPTION: type('[Subscription] Post Subscription'),
  POST_SUBSCRIPTION_FAILURE: type('[Subscription] Post Subscription Failure'),
  POST_SUBSCRIPTION_SUCCESS: type('[Subscription] Post Subscription Success'),
  SEARCH_PP_CARD: type('[Subscription] Search PP Card'),
  SEARCH_PP_CARD_FAILURE: type('[Subscription] Search PP Card Failure'),
  SEARCH_PP_CARD_SUCCESS: type('[Subscription] Search PP Card Success'),
  VALIDATE_DISCOUNT_CODE: type('[Subscription] Discount Code'),
  VALIDATE_DISCOUNT_CODE_FAILURE: type('[Subscription] Discount Code Failure'),
  VALIDATE_DISCOUNT_CODE_SUCCESS: type('[Subscription] Discount Code Success')
};

export class PostSubscription implements Action {
  type = ActionTypes.POST_SUBSCRIPTION;
  constructor(public payload: any) { }
}

export class PostSubscriptionFailure implements Action {
  type = ActionTypes.POST_SUBSCRIPTION_FAILURE;
  constructor(public payload: any) { }
}

export class PostSubscriptionSuccess implements Action {
  type = ActionTypes.POST_SUBSCRIPTION_SUCCESS;
  constructor(public payload: any) { }
}

export class SearchPPCard implements Action {
  type = ActionTypes.SEARCH_PP_CARD;
  constructor(public payload: any) { }
}

export class SearchPPCardFailure implements Action {
  type = ActionTypes.SEARCH_PP_CARD_FAILURE;
  constructor(public payload: any) { }
}

export class SearchPPCardSuccess implements Action {
  type = ActionTypes.SEARCH_PP_CARD_SUCCESS;
  constructor(public payload: any) { }
}

export class ValidateCode implements Action {
  type = ActionTypes.VALIDATE_DISCOUNT_CODE;
  constructor(public payload: any) { }
}

export class ValidateCodeSuccess implements Action {
  type = ActionTypes.VALIDATE_DISCOUNT_CODE_SUCCESS;
  constructor(public payload: any) { }
}

export class ValidateCodeFailure implements Action {
  type = ActionTypes.VALIDATE_DISCOUNT_CODE_FAILURE;
  constructor(public payload: any) { }
}

export type Actions = PostSubscription | PostSubscriptionFailure | PostSubscriptionSuccess |
SearchPPCard  | SearchPPCardFailure | SearchPPCardSuccess | ValidateCode |ValidateCodeSuccess | ValidateCodeFailure;
