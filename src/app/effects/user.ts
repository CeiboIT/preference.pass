import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {
  ActionTypes as AuthActionTypes
} from '../actions/auth';

import {
  ActionTypes as UserActionTypes, AddCompanionsFailure, AddCompanionsSuccess, AddCompanionSuccess, CreateUserSuccess,
  GetUserBasicDataSuccess,
  GetUserCompanionsSuccess
} from '../actions/user';

import {
  ActionTypes as SubscriptionActions
} from '../actions/subscription';

import {UserService} from '../services/user.service';
import {getUserIdFromToken} from "../utils/user";
import {parseLine} from "tslint/lib/test/lines";

@Injectable()
export class UserEffects {
  constructor(private userService: UserService, private action$: Actions) {}
  @Effect()
  CreateUserFromEmailAndPassword: Observable<{}> = this.action$
    .ofType(AuthActionTypes.REGISTER_WITH_EMAIL_AND_PASSWORD_SUCCESS)
    .map(action => action.payload)
    .switchMap((payload) => {
      console.log(payload);
      return this.userService.createUser(payload)
        .map(result => {
          return new CreateUserSuccess(result);
        });
    });
  @Effect()
  CreateUserFromFacebook: Observable<{}> = this.action$
    .ofType(AuthActionTypes.REGISTER_WITH_FACEBOOK_SUCCESS)
    .map(action => action.payload)
    .switchMap((payload) => {
      console.log(payload);
      return this.userService.createUser(payload)
        .map(result => new CreateUserSuccess({}));
    });
  @Effect()
  CreateUserFromGoogle: Observable<{}> = this.action$
    .ofType(AuthActionTypes.REGISTER_WITH_GOOGLE_SUCCESS)
    .map(action => action.payload)
    .switchMap((payload) => {
      console.log(payload);
      return this.userService.createUser(payload)
        .map(result => new CreateUserSuccess({}));
    });

  @Effect()
  GetUserBasicData: Observable<{}> = this.action$
    .ofType(AuthActionTypes.REGISTER_WITH_GOOGLE_SUCCESS,
      AuthActionTypes.REGISTER_WITH_FACEBOOK_SUCCESS,
      UserActionTypes.GET_USER_BASIC_DATA,
      SubscriptionActions.VALIDATE_DISCOUNT_CODE_SUCCESS_VALID,
      SubscriptionActions.SEARCH_PP_CARD_SUCCESS
      )
    .switchMap((action) => {
      return this.userService.getCurrentUser()
        .map(result => new GetUserBasicDataSuccess(result['data']['user']));
    });

  @Effect()
  AddCompanion: Observable<{}> = this.action$
    .ofType(UserActionTypes.ADD_COMPANION)
    .map(action => action.payload)
    .switchMap((payload) => {

      return this.userService.addCompanionToSubscriptionAndUser(payload.companion, payload.subscriptionId)
        .map(result => {
          return new AddCompanionSuccess({result: result, executionDate: payload.executionDate, subscriptionId: payload.subscriptionId });
        });
    });


  @Effect()
  AddCompanions: Observable<{}> = this.action$
    .ofType(UserActionTypes.ADD_COMPANIONS)
    .map(action => action.payload)
    .switchMap((payload) => {
      return this.userService.addCompanionsToTrip(payload.companions, payload.subscriptionId)
        .then(result => {
          return new AddCompanionsSuccess({result: result, executionDate: payload.executionDate, subscriptionId: payload.subscriptionId });
        }).catch(err => {
          return new AddCompanionsFailure(err);
        });
    });

  @Effect()
  GetUserCompanions: Observable<{}> = this.action$
    .ofType(UserActionTypes.ADD_COMPANION_SUCCESS)
    .switchMap(() => {
        return this.userService.getUserCompanions()
          .map(result => {
            const _data = result.data['user'].companions;
            return new GetUserCompanionsSuccess({companions : _data });
          }).catch((err) => {
            console.log(err);
            return Observable.of({ type: UserActionTypes.GET_USER_COMPANIONS_FAILURE, payload: err });
          });
    });

  /*
  @Effect()
  AskUserFor: Observable<{}> = this.action$
    .ofType(UserActionTypes.ASK_USER_FOR_AUTH, UserActionTypes.ASK_USER_FOR_DISCOUNT_CARD, UserActionTypes.ASK_USER_FOR_SUBSCRIPTION)
    .switchMap((action) => {
      switch(action.type) {
        case(UserActionTypes.ASK_USER_FOR_AUTH):
          return new
        break;
        case(UserActionTypes.ASK_USER_FOR_DISCOUNT_CARD):
          return
        break;
        case(UserActionTypes.ASK_USER_FOR_SUBSCRIPTION):
          return
        break;

      }
    });*/


}
