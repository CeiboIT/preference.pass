import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

import {
  ActionTypes,
  PostSubscriptionFailure,
  PostSubscriptionSuccess,
  SendSubscriptionMail,
  SendSubscriptionMailSuccess,
  SendSubscriptionMailFailure, SearchPPCardFailure, SearchPPCardSuccess,
  ValidateCodeFailure, ValidateCodeSuccess, ValidateCodeSuccessInvalid, ValidateCodeSuccessValid
} from '../actions/subscription';
import { ActionTypes as BookingActions } from '../actions/booking';
import { SubscriptionService } from '../services/subscriptions/subscription.service';

@Injectable()
export class SubscriptionEffects {
  constructor(
    private action$: Actions,
    private service: SubscriptionService
  ) {}

  @Effect()
  PostSubscription: Observable<{}> = this.action$
    .ofType(ActionTypes.POST_SUBSCRIPTION)
    .map(action => action.payload)
    .switchMap((payload) => {
      return this.service.sendSubscription(payload)
      .then((result) => new PostSubscriptionSuccess(result))
      .catch(err => new PostSubscriptionFailure(err));
    });

  @Effect()
  CheckPPCard: Observable<{}> = this.action$
    .ofType(ActionTypes.SEARCH_PP_CARD)
    .map(action => action.payload)
    .switchMap(payload => {
      return this.service.validatePPCard(payload)
        .then(res => new SearchPPCardSuccess(res))
        .catch(err => new SearchPPCardFailure(err));
    });

  @Effect()
  CheckDiscountCode: Observable<{}> = this.action$
    .ofType(ActionTypes.VALIDATE_DISCOUNT_CODE)
    .map(action => action.payload)
    .switchMap(payload => {
      return this.service.validateDiscountCode(payload)
        .then(res => {
          // if (!res['valid']) {
          //   return new ValidateCodeSuccessInvalid(res);
          // } else {
          //   return new ValidateCodeSuccessValid(res);
          // }
          return new ValidateCodeSuccessValid(res['valid']);
        })
        .catch(err => new SearchPPCardFailure(err));
    });

    @Effect({dispatch: false})
    sendSubscriptionMail$: Observable<{}> = this.action$
      .ofType(ActionTypes.SEND_SUBSCRIPTION_MAIL)
      .map(action => action.payload)
      .switchMap(payload => {
        console.log(payload);
          return this.service.sendSubscriptionMail(payload)
          .then(res => new SendSubscriptionMailSuccess(res))
          .catch(err => new SendSubscriptionMailFailure(err));
      });
}
