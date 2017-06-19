import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {MdDialog} from '@angular/material';
import {AuthModalComponent} from '../components/widgets/auth-modal/auth-modal.component';

@Injectable()
export class LayoutEffects {
  constructor(private action$: Actions, private dialog: MdDialog) {}

 // @Effect({dispatch: false})
 // openAuthDialog: Observable<{}> = this.action$


}
