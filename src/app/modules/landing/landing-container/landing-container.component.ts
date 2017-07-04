import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetList } from '../../../actions/activities';
import { Observable } from 'rxjs/Observable';
import { onStateChangeObservable } from '../../../utils/store';

@Component({
  selector: 'app-landing-container',
  template: `
    <div class="container">
      <div class="col-md-12">
        <div class="row">
          <div
            class="activities-landing-container col-md-4 col-sm-6 col-12" *ngFor="let activity of activities$ | async">
              <app-activity-card [activity]="activity"></app-activity-card>
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
