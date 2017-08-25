import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { MdSnackBar } from '@angular/material';

import { ActionTypes as subscriptionActionTypes } from "../actions/subscription";

@Injectable()
export class ToastEffects {
  constructor(private action$: Actions, private snackBar: MdSnackBar) {}
  @Effect()
  PostSubscriptionSuccess$: Observable<{}> = this.action$
    .ofType(subscriptionActionTypes.POST_SUBSCRIPTION_SUCCESS)
    .map (() => {
        return this.snackBar.open('Payment Success!', '', {
            duration: 5000
          });
    })
}
