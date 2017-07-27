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
  PostSubscription,
  PostSubscriptionFailure,
  PostSubscriptionSuccess
  } from '../actions/subscription';
import { SubscriptionService } from '../services/subscription.service';

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
      .then(result => new PostSubscriptionSuccess(result))
        .catch(err => new PostSubscriptionFailure(err));
    });

}
