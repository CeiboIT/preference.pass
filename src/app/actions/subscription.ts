import { Action } from '@ngrx/store';
import { type } from '../util';

export const ActionTypes = {
  POST_SUBSCRIPTION: type('[Subscription] Post Subscription'),
  POST_SUBSCRIPTION_FAILURE: type('[Subscription] Post Subscription Failure'),
  POST_SUBSCRIPTION_SUCCESS: type('[Subscription] Post Subscription Success')
}

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

export type Actions = PostSubscription | PostSubscriptionFailure | PostSubscriptionSuccess