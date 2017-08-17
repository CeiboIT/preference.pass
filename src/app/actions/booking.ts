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
  BOOKING_STEP1: type('[Booking] Step1'),
  BOOKING_STEP1_SUCCESS: type('[Booking] Step 1 Success'),
  BOOKING_STEP1_FAILURE: type('[Booking] Step 1 Failure'),
  BOOKING_STEP2: type('[Booking] Step 2'),
  BOOKING_STEP2_SUCCESS: type('[Booking] Step 2 Success'),
  BOOKING_STEP2_FAILURE: type('[Booking] Step 2 Failure'),
  BOOKING_STEP3: type('[Booking] Step 3'),
  BOOKING_STEP3_SUCCESS: type('[Booking] Step 3 Success'),
  BOOKING_STEP3_FAILURE: type('[Booking] Step 3 Failure'),
  MOVE_TO_STEP: type('[Booking] Move the next step'),
  MOVE_TO_STEP_SUCCESS: type('[Booking] Move the next step success'),
  MOVE_TO_STEP_FAILURE: type('[Booking] Move the next step failure'),
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

export class BookingStep1 implements Action {
  type = ActionTypes.BOOKING_STEP1;
   constructor(public payload: any) { }
}

export class BookingStep1Success implements Action {
  type = ActionTypes.BOOKING_STEP1_SUCCESS;
   constructor(public payload: any) { }
}

export class BookingStep1Failure implements Action {
  type = ActionTypes.BOOKING_STEP1_FAILURE;
   constructor(public payload: any) { }
}

export class MoveToStep implements Action {
  type = ActionTypes.MOVE_TO_STEP;
  constructor(public payload: any) { }
}

export class MoveToStepFailure implements Action {
  type = ActionTypes.MOVE_TO_STEP;
  constructor(public payload: any) { }
}

export class MoveToStepSuccess implements Action {
  type = ActionTypes.MOVE_TO_STEP;
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
 MoveToStep | MoveToStepFailure | MoveToStepSuccess |
BookingAttemptFailure | BookingStep1  |  BookingStep1Success | BookingStep1Failure;
