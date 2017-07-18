import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {
  ActionTypes as AuthActionTypes
} from '../actions/auth';

import {
  ActionTypes as UserActionTypes, CreateUserSuccess, CreateUserFailure
} from '../actions/user';

import {UserService} from '../services/user.service';

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
}
