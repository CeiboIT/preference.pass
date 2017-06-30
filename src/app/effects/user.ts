import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {
  ActionTypes, LoginWithEmailFailure, LoginWithEmailSuccess, RegisterWithEmailAndPasswordFailure,
  RegisterWithEmailAndPasswordSuccess
} from '../actions/auth';
import {AuthService} from '../services/auth.service';

@Injectable()
export class UserEffects {
  constructor(private authService: AuthService, private action$: Actions) {}
  @Effect()
  LoginWithEmail: Observable<{}> = this.action$
    .ofType(ActionTypes.LOGIN_WITH_EMAIL)
    .map(action => action.payload)
    .switchMap((payload) => {
      console.log(payload);
      return this.authService.passwordLessEmail(payload)
        .then(result => new LoginWithEmailSuccess({}))
        .catch(err => new LoginWithEmailFailure({}));
    });
  @Effect()
  RegisterWithEmailAndPassword: Observable<{}> = this.action$
    .ofType(ActionTypes.REGISTER_WITH_EMAIL_AND_PASSWORD)
    .map(action => action.payload)
    .switchMap((payload) => {
      console.log(payload);
      return this.authService.registerWithEmail(payload)
        .then(result => new RegisterWithEmailAndPasswordSuccess(result))
        .catch(err => new RegisterWithEmailAndPasswordFailure(err));
    });
}
