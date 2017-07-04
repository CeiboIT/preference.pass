import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetList } from '../../../actions/activities';
import { Observable } from 'rxjs/Observable';
import { onStateChangeObservable } from '../../../utils/store';

@Component({
  selector: 'app-landing-container',
  template: `
    <div
      fxFlex
      class='activities-landing-container' *ngFor="let activity of activities$ | async" >
      <app-activity-card fxFlex="33%" [activity]="activity"></app-activity-card>
    </div>
  `
})

export class LandingContainerComponent implements OnInit {
  public activities$: Observable<any>;
  constructor(
    private store: Store<any>
  ) { }
  ngOnInit() {
    this.store.dispatch(new GetList({}));
    this.activities$ = onStateChangeObservable(this.store, 'activities.list');
  }
}
