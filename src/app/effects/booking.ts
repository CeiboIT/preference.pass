import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import {
  ActionTypes, BookingStep1Success
} from '../actions/booking';
import { BookingService } from '../services/booking.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class BookingEffects {
  constructor(
    private action$: Actions,
    private bookingService: BookingService
  ) {}

  @Effect()
  BookingStep1: Observable<{}> = this.action$
    .ofType(ActionTypes.BOOKING_STEP1)
    .map(action => action.payload)
    .switchMap((payload) => {
      return this.bookingService.bookintStep1(payload)
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
}
