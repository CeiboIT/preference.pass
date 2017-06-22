import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import { ActionTypes, LoginWithEmailFailure, LoginWithEmailSuccess } from '../actions/user';
import {AuthService} from '../services/auth.service';

@Injectable()
export class UserEffects {
  constructor(private authService: AuthService, private action$: Actions) {}
  @Effect()
  LoginWithEmail: Observable<{}> = this.action$
    .ofType(ActionTypes.LOGIN_WITH_EMAIL)
    .switchMap(payload => this.authService.passwordLessEmail(payload)
        .then(result => new LoginWithEmailSuccess({}))
        .catch(err => new LoginWithEmailFailure({})));
}
