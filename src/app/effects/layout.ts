import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {MdDialog} from '@angular/material';
import {AuthModalComponent} from '../components/widgets/auth-modal/auth-modal.component';
import { ActionTypes } from '../actions/layout';
import { LoginWithEmail, RegisterWithEmailAndPassword } from '../actions/user';
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
     const stylesToUse = (retrieveWidth() ) ?
       {'width': '100%',
         'height': '100%'}
       :
       {'width': '30%'};

    this.dialog.open(AuthModalComponent, stylesToUse)
      .afterClosed().subscribe(result => {
        switch (result.type) {
          case('EmailRegister'):
            this.store.dispatch(new RegisterWithEmailAndPassword(result.data));
          break;
          case('EmailLogin'):
            this.store.dispatch(new LoginWithEmail({email: result.data.email}));
          break;
        }
    });
   });

  @Effect({dispatch: false})
  openRegisterDialog: Observable<{}> = this.action$
    .ofType(ActionTypes.OPEN_REGISTER)
    .do(() => {
      const stylesToUse = (retrieveWidth() ) ?
        {'width': '100%',
          'height': '100%'}
        :
        {'width': '30%'};

      this.dialog.open(AuthModalComponent, stylesToUse);
    });
}
