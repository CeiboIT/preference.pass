import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {MdDialog} from '@angular/material';
import {AuthModalComponent} from '../components/widgets/auth-modal/auth-modal.component';
import { ActionTypes } from '../actions/layout';
import {LoginWithEmail, RegisterWithEmailAndPassword, RegisterWithFacebook, RegisterWithGoogle,} from '../actions/auth';
import {Store} from '@ngrx/store';

function retrieveWidth() {
  if (matchMedia) {
    let isXS = window.matchMedia('(max-width: 480px)');
    let isSM =  window.matchMedia('(max-width: 768px)');
    return isXS.matches || isSM.matches;
  }
}

@Injectable()
export class LayoutEffects {
  constructor(private action$: Actions, private dialog: MdDialog, private store: Store<any>) {}

   @Effect({dispatch: false})
 openAuthDialog: Observable<{}> = this.action$
   .ofType(ActionTypes.OPEN_LOGIN)
   .do(() => {
    let modalConfig = {
      data: {
        type: 'login'
      }
    };
     retrieveWidth()  ? Object.assign(modalConfig, {'width': '100%',
         'height': '100%'}) : Object.assign(modalConfig, {'width': '30%', height: '50%'});

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
        data: {type: 'register'}
      };
      retrieveWidth()  ? Object.assign(modalConfig, {'width': '100%',
        'height': '100%'}) : Object.assign(modalConfig, {'width': '30%'});

      this.dialog.open(AuthModalComponent, modalConfig)
        .afterClosed().subscribe(result => {
          this.dispatchAuthAction(result.type, result.data);
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
    }
  }
}
