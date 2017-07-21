import { Action } from '@ngrx/store';
import { type } from '../util';

export const ActionTypes = {
  GET_COMPANIONS: type('[Booking] Get Companions'),
  GET_COMPANIONS_SUCCESS: type('[Booking] Get Companions Success'),
  GET_COMPANIONS_FAILURE: type('[Booking] Get Companions Failure'),
  COMPANION_SELECTED: type('[Booking] Companion Selected'),
  SELECTED_BOOKING_DATE: type('[Booking] Selected Booking Date'),
  SELECTED_DEPARTURE_POINT_AND_TIME: type('[Booking] Selected Departure Point and Time'),
  BOOKING_ATTEMPT: type('[Booking] Attempt'),
  BOOKING_ATTEMPT_SUCCESS: type('[Booking] Attempt Success'),
  BOOKING_ATTEMPT_FAILURE: type('[Booking] Attempt Failure'),
};

export class GetCompanions implements Action {
  type = ActionTypes.GET_COMPANIONS;
  constructor(public payload: any) { }
}

export class GetCompanionsSuccess implements Action {
  type = ActionTypes.GET_COMPANIONS_SUCCESS;
  constructor(public payload: any) { }
}

export class GetCompanionsFailure implements Action {
  type = ActionTypes.GET_COMPANIONS_FAILURE;
  constructor(public payload: any) { }
}

export class CompanionSelected implements Action {
  type = ActionTypes.COMPANION_SELECTED;
  constructor(public payload: any) { }
}

export class SelectBookingDate implements Action {
  type = ActionTypes.SELECTED_BOOKING_DATE;
  constructor(public payload: any) { }
}

export class SelectedDeparturePointAndTime implements Action {
  type = ActionTypes.SELECTED_DEPARTURE_POINT_AND_TIME;
  constructor(public payload: any) { }
}

export class BookingAttempt implements Action {
  type = ActionTypes.BOOKING_ATTEMPT;
  constructor(public payload: any) { }
}

export class BookingAttemptSuccess implements Action {
  type = ActionTypes.BOOKING_ATTEMPT_SUCCESS;
  constructor(public payload: any) { }
}

export class BookingAttemptFailure implements Action {
  type = ActionTypes.BOOKING_ATTEMPT_FAILURE;
  constructor(public payload: any) { }
}

export type Actions =  GetCompanions |
GetCompanionsSuccess |
GetCompanionsFailure |
CompanionSelected |
SelectBookingDate |
SelectedDeparturePointAndTime |
BookingAttempt |
BookingAttemptSuccess |
BookingAttemptFailure;
