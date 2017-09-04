import { Component, OnInit } from '@angular/core';
import {
  GetActivitiesByCategory,
  GetActivitiesByCategorySuccess,
  GetHotDeals,
  GetHotDealsSuccess,
  GetHotDealsFailure,
  GetList,
  GetTours,
  GetToursSuccess,
  GetActivitiesSuccess,
  GetNightClubsSuccess,
  GetShowsSuccess
  } from '../../../actions/activities';
import { Observable } from 'rxjs/Observable';
import { onStateChangeObservable } from '../../../utils/store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-landing-container',
  template: `
    <div class="landing-container">
      <div class="hot-deals py-5">
        <app-hot-deals-list [hotDeals]="hotDeals$ | async"></app-hot-deals-list>
      </div>
      
      <div class="my-5">
        <app-activity-list [activities]="tours$ | async" [category]="'tours'"></app-activity-list>
      </div>

      <div class="my-5">
        <app-activity-list [activities]="activities$ | async" [category]="'activities'"></app-activity-list>
      </div>
      
      <div class="my-5">
        <app-activity-list [activities]="shows$ | async" [category]="'shows'"></app-activity-list>
      </div>
    </div>
  `,
  styles: [ `
      .landing-container {
        background-color: white;
      }

      .hot-deals {
        background-color: #f1f1f1;
      }
  ` ]
})

export class LandingContainerComponent implements OnInit {
  public activities$: Observable<any>;
  public tours$: Observable<any>;
  public nightclubs$: Observable<any>;
  public hotDeals$: Observable<any>;
  public shows$: Observable<any>;

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.store.dispatch(new GetActivitiesByCategory({name: 'ACTIVITIES', fromLanding: true}));
    this.store.dispatch(new GetActivitiesByCategory({name: 'TOURS', fromLanding: true}));
    this.store.dispatch(new GetActivitiesByCategory({name: 'SHOW', fromLanding: true}));
    this.store.dispatch(new GetHotDeals({ fromLanding: true }));
    this.activities$ = onStateChangeObservable(this.store, 'activities.activities');
    this.tours$ = onStateChangeObservable(this.store, 'activities.tours');
    this.shows$ = onStateChangeObservable(this.store, 'activities.shows');
    this.hotDeals$ = onStateChangeObservable(this.store, 'activities.hotDeals');
  }

  ngOnDestroy() {
    this.store.dispatch(new GetHotDealsSuccess([]));
    this.store.dispatch(new GetToursSuccess([]));
    this.store.dispatch(new GetActivitiesSuccess([]));
    this.store.dispatch(new GetNightClubsSuccess([]));
    this.store.dispatch(new GetShowsSuccess([]));
  }
}
