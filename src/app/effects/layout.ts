import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {MdDialog} from '@angular/material';
import {AuthModalComponent} from '../components/widgets/auth-modal/auth-modal.component';
import { ActionTypes } from '../actions/layout';
import {
  LoginWithEmail, LoginWithFacebook, LoginWithGoogle, RegisterWithEmailAndPassword, RegisterWithFacebook,
  RegisterWithGoogle,
} from '../actions/auth';
import {Store} from '@ngrx/store';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import {OnboardingModalComponent} from '../components/widgets/onboarding-modal/onboarding-modal.component';
import {Router} from "@angular/router";

function retrieveWidth() {
  if (matchMedia) {
    let isXS = window.matchMedia('(max-width: 480px)');
    let isSM =  window.matchMedia('(max-width: 768px)');
    return isXS.matches || isSM.matches;
  }
}

@Injectable()
export class LayoutEffects {
  constructor(private action$: Actions, private dialog: MdDialog, private store: Store<any>, private router: Router) {}

   @Effect({dispatch: false})
 openAuthDialog: Observable<{}> = this.action$
   .ofType(ActionTypes.OPEN_LOGIN)
   .do(() => {
    let modalConfig = {
      data: {
        type: 'login',
      },
      panelClass: 'md-dialog-fullscreen-xs'
    };
    //  retrieveWidth()  ? Object.assign(modalConfig, {'width': '100%',
    //      'height': '100%'}) : Object.assign(modalConfig, {'width': '30%', height: '50%'});

    this.dialog.open(AuthModalComponent, modalConfig)
      .afterClosed().subscribe(result => {
        this.dispatchAuthAction(result.type, result.data);
    });
   });

  @Effect({dispatch: false})
  openRegisterDialog: Observable<{}> = this.action$
    .ofType(ActionTypes.OPEN_REGISTER)
    .do(() => {
      let modalConfig = {
        data: {type: 'register'},
        panelClass: 'md-dialog-fullscreen-xs'
      };
      // retrieveWidth() ? Object.assign(modalConfig, {'width': '100%',
      //   'height': '100%'}) : Object.assign(modalConfig, {'width': '30%'});

      this.dialog.open(AuthModalComponent, modalConfig)
        .afterClosed().subscribe(result => {
          this.dispatchAuthAction(result.type, result.data);
      });
    });

  @Effect({dispatch: false})
  openOnBoardingModal: Observable<{}> = this.action$
    .ofType(ActionTypes.OPEN_ON_BOARDING)
    .map(action => action.payload)
    .do((payload) => {
      let modalConfig = {
        panelClass: 'md-dialog-fullscreen-xs',
        data: {startOnStep: payload.startOnStep}
      };
      // retrieveWidth() ? Object.assign(modalConfig, {'width': '100%',
      //   'height': '100%'}) : Object.assign(modalConfig, {'width': '50%'});

      this.dialog.open(OnboardingModalComponent, modalConfig)
        .afterClosed().subscribe(result => {
          if (payload && payload.onSuccessRedirect) {
            this.router.navigate([payload.onSuccessRedirect]);
          }
      });
  });
  dispatchAuthAction(type, data){
    switch (type) {
      case('EmailRegister'):
        this.store.dispatch(new RegisterWithEmailAndPassword(data));
        break;
      case('EmailLogin'):
        this.store.dispatch(new LoginWithEmail({email: data.email}));
        break;
      case('GoogleRegister'):
      this.store.dispatch(new RegisterWithGoogle({type: type }));
      break;
      case('FacebookRegister'):
        this.store.dispatch(new RegisterWithFacebook({type: type}));
        break;
      case('GoogleLogin'):
        this.store.dispatch(new LoginWithGoogle({type: type }));
        break;
      case('FacebookLogin'):
        this.store.dispatch(new LoginWithFacebook({type: type}));
        break;
    }
  }
}
