import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MdDialog } from '@angular/material';
import { Actions, Effect } from '@ngrx/effects';
import { ActionTypes } from '../actions/layout';
import { AuthModalComponent } from '../components/widgets/auth-modal/auth-modal.component';
import { AlertComponent } from "../components/widgets/alert/alert.component";
import { ContactUsComponent } from "../components/widgets/contact-us/contact-us.component";
import { Observable } from 'rxjs/Observable';
import { OnboardingModalComponent } from '../components/widgets/onboarding-modal/onboarding-modal.component';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toArray';
import {
  LoginWithEmail, 
  LoginWithFacebook, 
  LoginWithGoogle, 
  RegisterWithEmailAndPassword, 
  RegisterWithFacebook,
  RegisterWithGoogle,
} from '../actions/auth';


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

      this.dialog.open(AuthModalComponent, modalConfig)
        .afterClosed().subscribe(result => {
          if (result) this.dispatchAuthAction(result.type, result.data);
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

      this.dialog.open(AuthModalComponent, modalConfig)
        .afterClosed().subscribe(result => {
          if (result) this.dispatchAuthAction(result.type, result.data);
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
        this.store.dispatch(new LoginWithEmail({email: data.email}));
        break;
      case('EmailLogin'):
        this.store.dispatch(new LoginWithEmail({email: data.email}));
        break;
      case('GoogleRegister'):
      this.store.dispatch(new RegisterWithGoogle({type: type}));
      break;
      case('FacebookRegister'):
        this.store.dispatch(new RegisterWithFacebook({type: type}));
        break;
      case('GoogleLogin'):
        this.store.dispatch(new LoginWithGoogle({type: type}));
        break;
      case('FacebookLogin'):
        this.store.dispatch(new LoginWithFacebook({type: type}));
        break;
    }
  }

  @Effect({dispatch: false})
  openAlertDialog: Observable<{}> = this.action$
    .ofType(ActionTypes.OPEN_ALERT)
    .map(action => action.payload)
    .do((payload) => {
      let modalConfig = {
        data: {
          type: payload.type,
          title: payload.title,
          message: payload.message
        }
      };

      this.dialog.open(AlertComponent, modalConfig)
        .afterClosed().subscribe(result => {

      });
    });

    @Effect({dispatch: false})
    openContactDialog: Observable<{}> = this.action$
      .ofType(ActionTypes.OPEN_CONTACT)
      .map(action => action.payload)
      .do((payload) => {
        let modalConfig = {
          data: {
            type: payload.type,
            title: payload.title,
            message: payload.message
          }
        };
  
        this.dialog.open(ContactUsComponent, modalConfig)
          .afterClosed().subscribe(result => {
            
        });
      });
}
