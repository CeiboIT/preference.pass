import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {
  ActionTypes, LoginWithEmailFailure, LoginWithEmailSuccess, RegisterWithEmailAndPasswordFailure,
  RegisterWithEmailAndPasswordSuccess
} from '../actions/auth';
import {AuthService} from '../services/auth.service';

@Injectable()
export class AuthEffects {
  constructor(private authService: AuthService, private action$: Actions) {}
  @Effect()
  LoginWithEmail: Observable<{}> = this.action$
    .ofType(ActionTypes.LOGIN_WITH_EMAIL)
    .map(action => action.payload)
    .switchMap((payload) => {
      console.log(payload);
      return this.authService.passswordLessSignUp(payload)
        .then(result => new LoginWithEmailSuccess({}))
        .catch(err => new LoginWithEmailFailure({}));
    });
  /*@Effect()
  RegisterWithEmailAndPassword: Observable<{}> = this.action$
    .ofType(ActionTypes.REGISTER_WITH_EMAIL_AND_PASSWORD)
    .map(action => action.payload)
    .switchMap((payload) => {
      console.log(payload);
      const registerPayload = {
        email: payload.email,
        password: payload.password
      };
      return this.authService.registerWithEmail(registerPayload)
        .then(result => new RegisterWithEmailAndPasswordSuccess(result))
        .catch(err => new RegisterWithEmailAndPasswordFailure(err));
    });*/

  @Effect()
  AuthWithGoogle: Observable<{}> = this.action$
    .ofType(ActionTypes.REGISTER_WITH_GOOGLE)
    .switchMap((action) => {
      return this.authService.googleLogin()
        .then(result => new RegisterWithEmailAndPasswordSuccess(result))
        .catch(err => new RegisterWithEmailAndPasswordFailure(err));
    });

  @Effect()
  AuthWithFacebook: Observable<{}> = this.action$
    .ofType(ActionTypes.REGISTER_WITH_FACEBOOK)
    .switchMap((action) => {
      return this.authService.facebookLogin()
        .then(result => new RegisterWithEmailAndPasswordSuccess(result))
        .catch(err => new RegisterWithEmailAndPasswordFailure(err));
    });
}
