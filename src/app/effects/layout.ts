import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {MdDialog} from '@angular/material';
import {AuthModalComponent} from '../components/widgets/auth-modal/auth-modal.component';
import { ActionTypes } from '../actions/layout';

function retrieveWidth(){
  if(matchMedia){
    let isXS = window.matchMedia('(max-width: 480px)');
    let isSM =  window.matchMedia('(max-width: 768px)');
    return isXS.matches || isSM.matches;
  }
}

@Injectable()
export class LayoutEffects {
  constructor(private action$: Actions, private dialog: MdDialog) {}

 @Effect({dispatch: false})
 openAuthDialog: Observable<{}> = this.action$
   .ofType(ActionTypes.OPEN_LOGIN)
   .do(() => {
     const stylesToUse = (retrieveWidth() ) ?
       {'width': '100%',
         'height': '100%'}
       :
       {'width': '30%'};

    this.dialog.open(AuthModalComponent, stylesToUse);
   });

}
