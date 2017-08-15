import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {
  ActionTypes as AuthActionTypes
} from '../actions/auth';

import {
  ActionTypes as UserActionTypes, AddCompanionSuccess, CreateUserSuccess, GetUserBasicDataSuccess
} from '../actions/user';

import {
  ActionTypes as SubscriptionActions
} from '../actions/subscription';

import {UserService} from '../services/user.service';
import {getUserIdFromToken} from "../utils/user";

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
          console.log(result);
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
      SubscriptionActions.VALIDATE_DISCOUNT_CODE_SUCCESS_VALID
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
      const userId = getUserIdFromToken();
     return this.userService.createUserCompanion(payload, userId)
       .map(result => new AddCompanionSuccess(result['data']['createCompanion']));
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
