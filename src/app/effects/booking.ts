import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import {
  ActionTypes, BookingFinishSuccess, BookingStep1Success, GetBookingSubscriptionSuccess,
  GetValidSubscriptionCompanionsSuccess, MoveToStep
} from '../actions/booking';
import { ActionTypes as SubscriptionActions } from '../actions/subscription';
import { ActionTypes as UserActions } from '../actions/user';
import { BookingService } from '../services/booking.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {UserService} from '../services/user.service';
import * as _ from 'lodash';

function analyzeUserSubscription(user) {
  let conditions = {
    hasSubscription : false,
    hasCompanionsCompleted: false
  };
  conditions.hasSubscription = !!(user.subscriptions && user.subscriptions.length);
  if (conditions.hasSubscription) {
    const _subscription = user.subscriptions[0];
    const _counts = _.countBy(_subscription.companions, 'personType');
    const _kidsCompleted = _counts.Kid === _subscription.kids;
    const _adultsCompleted = _counts.Adult === _subscription.adults;
    conditions.hasCompanionsCompleted = _kidsCompleted && _adultsCompleted;
  }
  return conditions;
}

@Injectable()
export class BookingEffects {
  constructor(
    private action$: Actions,
    private bookingService: BookingService,
    private userService: UserService
  ) {}

  @Effect()
  BookingStep1: Observable<{}> = this.action$
    .ofType(ActionTypes.BOOKING_STEP1)
    .map(action => action.payload)
    .switchMap((payload) => {
      return this.bookingService.bookingStep1(payload)
        .map((result) => {
          return new BookingStep1Success(
            result.data['createReservation']
          );
        })
        .catch((err) => {
          console.log(err);
          return Observable.of({ type: ActionTypes.BOOKING_STEP1_FAILURE, payload: err });
        } );
    });



  @Effect()
  BookingSubscription: Observable<{}> = this.action$
    .ofType(SubscriptionActions.POST_SUBSCRIPTION_SUCCESS)
    .map(action => action.payload)
    .map((payload) => {
      return new MoveToStep({
        step: 'CompanionsToTrip', subscription: payload
      });
    });

  @Effect()
  BookingFinish: Observable<{}> = this.action$
    .ofType(ActionTypes.BOOKING_FINISH)
    .map(action => action.payload)
    .switchMap((payload) => {
      return this.bookingService.completeBooking(payload)
        .map((result) => {
          return (new BookingFinishSuccess(result.data['updateReservation']), new MoveToStep({
            step: 'FinishBooking'
          }));
        })
        .catch((err) => {
          console.log(err);
          return Observable.of({ type: ActionTypes.BOOKING_FINISH_FAILURE, payload: err });
        } );
    });

  @Effect()
  CalculateBookingNextStep: Observable<{}> = this.action$
    .ofType(ActionTypes.BOOKING_STEP1_SUCCESS)
    .map(action => action.payload)
    .switchMap((payload) => {
        return this.bookingService.getValidSubscription(payload.executionDate)
          .map((result) => {
          const _user = result.data['user'];
          const _userAnalysis = analyzeUserSubscription(_user);
          if (!_userAnalysis.hasSubscription) {
            return new MoveToStep({step: 'Subscription' });
          } else {
            if( _userAnalysis.hasCompanionsCompleted) {
              return new MoveToStep({step: 'CompanionsToBooking', subscription: _user.subscriptions[0]});
            } else {
              return new MoveToStep({ step: 'CompanionsToTrip', subscription: _user.subscriptions[0] });
            }
          };
        });
    });

  @Effect()
  UpdateBookingSubscription: Observable<{}> = this.action$
    .ofType(UserActions.ADD_COMPANION_SUCCESS)
    .map(action => action.payload)
    .switchMap((payload) => {
      return this.bookingService.getBookingSubscription(payload.subscriptionId)
        .map((result) => {
          const _subscription = result.data['Subscription'];
          return new GetBookingSubscriptionSuccess({subscription: _subscription});
        }).catch((err) => {
          console.log(err);
          return Observable.of({ type: ActionTypes.GET_BOOKING_SUBSCRIPTION_FAILURE, payload: err });
        });
    });
  /*@Effect()
  GetValidSubscriptionCompanions: Observable<{}> = this.action$
    .ofType(ActionTypes.GET_VALID_SUBSCRIPTION_COMPANIONS)
    .map(action => action.payload)
    .switchMap((payload) => {
        this.bookingService.getValidSubscription(payload.executionDate).map(result => {
          const _user = result.data['user'];
          if (_user.subscriptions && _user.subscriptions.length) {
            return new GetValidSubscriptionCompanionsSuccess({companions: _user.subscription.companions});
          }
          return new GetValidSubscriptionCompanionsSuccess({companions: []});
        });
    });*/
}
