import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {GetList, GetTours, GetActivitiesByCategory, GetHotDealsFailure, GetHotDeals} from '../../../actions/activities';
import { Observable } from 'rxjs/Observable';
import { onStateChangeObservable } from '../../../utils/store';

@Component({
  selector: 'app-landing-container',
  template: `
    <div class="landing-container">
      <div class="hot-deals py-3 mb-3">
        <h3 class="title">
          Hot deals
        </h3>
        <app-hot-deals-list [hotDeals]="tours$ | async "></app-hot-deals-list>
      </div>
      <h3 class="title">
        Tours
      </h3>
      <app-activity-list [activities]="tours$ | async "></app-activity-list>
      <h3 class="title">
        Activities
      </h3>
      <app-activity-list [activities]="activities$ | async "></app-activity-list>
      <h3 class="title">
        Nightclubs
      </h3>
      <app-activity-list [activities]="nightclubs$ | async "></app-activity-list>
    </div>
  `,
  styles: [ `

    .title {
        padding: 0 60px;
    }

    .hot-deals {
      background-color: #f1f1f1;
    }

    @media screen and (max-width: 480px) {
      .title {
        padding: 0 10px;
      } 
    }
  ` ]
})

export class LandingContainerComponent implements OnInit {
  public activities$: Observable<any>;
  public tours$: Observable<any>;
  public nightclubs$: Observable<any>;
  public hotDeals$: Observable<any>;

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.store.dispatch(new GetActivitiesByCategory({name: 'ACTIVITIES', fromLanding: true}));
    this.store.dispatch(new GetActivitiesByCategory({name: 'TOURS', fromLanding: true}));
    this.store.dispatch(new GetActivitiesByCategory({name: 'NIGHTCLUBS', fromLanding: true}));
    this.store.dispatch(new GetHotDeals({}));
    this.activities$ = onStateChangeObservable(this.store, 'activities.activities');
    this.tours$ = onStateChangeObservable(this.store, 'activities.tours');
    this.nightclubs$ = onStateChangeObservable(this.store, 'activities.nightclubs');
    this.hotDeals$ = onStateChangeObservable(this.store, 'activities.hotDeals');
  }
}
