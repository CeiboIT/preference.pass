import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {
  ActionTypes, AuthLogOutFailure, AuthLogOutSuccess, LoginWithEmailFailure, LoginWithEmailSuccess,
  LoginWithFacebookFailure,
  LoginWithFacebookSuccess,
  LoginWithGoogleFailure,
  LoginWithGoogleSuccess,
  RegisterWithEmailAndPasswordFailure,
  RegisterWithEmailAndPasswordSuccess, RegisterWithFacebookFailure, RegisterWithFacebookSuccess
} from '../actions/auth';
import { OpenAlert } from "../actions/layout";
import {AuthService} from '../services/auth.service';

@Injectable()
export class AuthEffects {
  constructor(private authService: AuthService, private action$: Actions) {}
  @Effect()
  LoginWithEmail: Observable<{}> = this.action$
    .ofType(ActionTypes.LOGIN_WITH_EMAIL)
    .map(action => action.payload)
    .switchMap((payload) => {
      return this.authService.passswordLessSignUp(payload)
        .then(result => (new LoginWithEmailSuccess({}), new OpenAlert({type: 'success', title: 'Success!', message: 'Please check your e-mail.'})))
        .catch(err => (new LoginWithEmailFailure({}), new OpenAlert({type: 'error', title: 'Error', message: 'An error has occurred.'})));
    });
  @Effect()
  AuthWithGoogle: Observable<{}> = this.action$
    .ofType(ActionTypes.REGISTER_WITH_GOOGLE)
    .switchMap((action) => {
      return this.authService.googleLogin()
        .then(result => new RegisterWithEmailAndPasswordSuccess(result))
        .catch(err => new RegisterWithEmailAndPasswordFailure(err));
    });

  @Effect()
  RegisterWithFacebook: Observable<{}> = this.action$
    .ofType(ActionTypes.REGISTER_WITH_FACEBOOK)
    .switchMap((action) => {
      return this.authService.facebookLogin()
        .then(result => new RegisterWithFacebookSuccess(result))
        .catch(err => new RegisterWithFacebookFailure(err));
    });

  @Effect()
  LoginWithFacebook: Observable<{}> = this.action$
    .ofType(ActionTypes.LOGIN_WITH_FACEBOOK)
    .switchMap((action) => {
      return this.authService.facebookLogin()
        .then(result => new LoginWithFacebookSuccess(result))
        .catch(err => new LoginWithFacebookFailure(err));
    });

  @Effect()
  LoginWithGoogle: Observable<{}> = this.action$
    .ofType(ActionTypes.LOGIN_WITH_GOOGLE)
    .switchMap((action) => {
      return this.authService.googleLogin()
        .then(result => new LoginWithGoogleSuccess(result))
        .catch(err => new LoginWithGoogleFailure(err));
    });

  @Effect()
  LogOut: Observable<{}> = this.action$
    .ofType(ActionTypes.LOGOUT)
    .switchMap((action) => {
      return this.authService.logOut()
        .then(result => new AuthLogOutSuccess({}))
        .catch(err => new AuthLogOutFailure({}));
    });
}
