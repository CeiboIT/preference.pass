import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

import { ActionTypes as authActionTypes } from '../actions/auth';
import { ActionTypes as bookingActionTypes } from "../actions/booking";
import { ActionTypes as subscriptionActionTypes } from "../actions/subscription";
import { AlertService } from "../services/alerts.service";

@Injectable()
export class AlertsEffects {
  constructor(
    private action$: Actions,
    private store: Store<{}>,
    private alertService: AlertService
  ) {}

    @Effect()
    loginWithEmailSuccess$: Observable<{}> = this.action$
        .ofType(authActionTypes.LOGIN_WITH_EMAIL_SUCCESS)
        .switchMap(() => {
            return this.alertService.openAlert({type: 'success', title: 'Success!', message: 'Please check your e-mail.'});
        });
    
    @Effect()
    loginWithEmailFailure$: Observable<{}> = this.action$
        .ofType(authActionTypes.LOGIN_WITH_EMAIL_FAILURE)
        .switchMap(() => {
            return this.alertService.openAlert({type: 'error', title: 'Error', message: 'An error has occurred.'});
        });

    @Effect()
    BookingFinishSuccess$: Observable<{}> = this.action$
      .ofType(bookingActionTypes.BOOKING_FINISH_SUCCESS)
      .switchMap(() => {
          return this.alertService.openAlert({type: 'success', title: 'Success!', message: 'Booking Finish.'});
      });

    @Effect()
    BookingFinishFailure$: Observable<{}> = this.action$
        .ofType(bookingActionTypes.BOOKING_FINISH_FAILURE)
        .switchMap(() => {
            return this.alertService.openAlert({type: 'error', title: 'Error', message: 'An error has occurred.'});
        });

    @Effect()
    PostSubscriptionSuccess$: Observable<{}> = this.action$
        .ofType(subscriptionActionTypes.POST_SUBSCRIPTION_SUCCESS)
        .switchMap(() => {
            return this.alertService.openAlert({type: 'success', title: 'Success!', message: 'Payment Success.'});
        });

    @Effect()
    PostSubscriptionFailure$: Observable<{}> = this.action$
        .ofType(subscriptionActionTypes.POST_SUBSCRIPTION_FAILURE)
        .switchMap(() => {
            return this.alertService.openAlert({type: 'error', title: 'Error', message: 'An error has occurred.'});
        });

}