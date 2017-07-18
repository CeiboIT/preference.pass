import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {GetList, GetTours} from '../../../actions/activities';
import { Observable } from 'rxjs/Observable';
import { onStateChangeObservable } from '../../../utils/store';

@Component({
  selector: 'app-landing-container',
  template: `
    <div class="landing-container mt-3">
      <h3 class="pl-3 pr-3">
        Tours
      </h3>
      <app-activity-list [activities]="activities$ | async "></app-activity-list>
    </div>
  `
})

export class LandingContainerComponent implements OnInit {
  public activities$: Observable<any>;

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.store.dispatch(new GetTours({}));
    this.activities$ = onStateChangeObservable(this.store, 'activities.list');
  }
}
