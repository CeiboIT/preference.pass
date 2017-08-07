import { Action } from '@ngrx/store';
import { type } from '../util';

export const ActionTypes = {
  POST_SUBSCRIPTION: type('[Subscription] Post Subscription'),
  POST_SUBSCRIPTION_FAILURE: type('[Subscription] Post Subscription Failure'),
  POST_SUBSCRIPTION_SUCCESS: type('[Subscription] Post Subscription Success'),
  SEARCH_PP_CARD: type('[Subscription] Search PP Card'),
  SEARCH_PP_CARD_FAILURE: type('[Subscription] Search PP Card Failure'),
  SEARCH_PP_CARD_SUCCESS: type('[Subscription] Search PP Card Success'),
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

export type Actions = PostSubscription | PostSubscriptionFailure | PostSubscriptionSuccess |
SearchPPCard  | SearchPPCardFailure | SearchPPCardSuccess;
