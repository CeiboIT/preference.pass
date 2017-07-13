import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetList } from '../../../actions/activities';
import { Observable } from 'rxjs/Observable';
import { onStateChangeObservable } from '../../../utils/store';

@Component({
  selector: 'app-landing-container',
  template: `
    <div class="container-fluid mt-5">
      <div class="row">
        <div class="col-12">
          <div class="col-12">
            <h3>Hot deals</h3>
          </div>
          <div class="col-12">
            <app-activity-list [activities]="activities$ | async "></app-activity-list>
          </div>
        </div>
        <div class="col-12">
          <div class="col-12 mt-4">
            <h3>Tours</h3>
          </div>
          <div class="col-12">
            <app-activity-list [activities]="activities$ | async "></app-activity-list>
          </div>
        </div>
      </div>
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
