import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/toPromise';
import { OpenAlert } from "../actions/layout";

@Injectable()
export class AlertService {
  constructor(private store: Store<{}>) { }

  openAlert(payload) {
    return new Promise((resolve, reject) => {
        this.store.dispatch(new OpenAlert(payload))
        resolve();
    });
  }
}
