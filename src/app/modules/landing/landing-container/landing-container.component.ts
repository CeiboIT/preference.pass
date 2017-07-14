import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetList } from '../../../actions/activities';
import { Observable } from 'rxjs/Observable';
import { onStateChangeObservable } from '../../../utils/store';

@Component({
  selector: 'app-landing-container',
  template: `
    <app-activity-list [activities]="activities$ | async "></app-activity-list>
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
