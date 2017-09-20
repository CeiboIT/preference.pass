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
  GetShowsSuccess,
  GetTransportSuccess, GetRestaurantsSuccess, GetShoppingSuccess, GetWeRecommendSuccess
} from '../../../actions/activities';
import { ISubscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { onStateChangeObservable } from '../../../utils/store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-landing-container',
  template: `
    <div>
      <app-benefits-header [part]="'1'"></app-benefits-header>
    </div>

    <div class="landing-container">
      <div class="hot-deals py-5">
        <app-hot-deals-list [hotDeals]="hotDeals$ | async"></app-hot-deals-list>
      </div>
      
      <div class="py-5">
        <app-activity-list [activities]="tours$ | async" [category]="'tours'"></app-activity-list>
      </div>
      
      <div>
        <app-benefits-header [part]="'2'"></app-benefits-header>
      </div>
      
      <div class="py-5">
        <app-activity-list [activities]="activities$ | async" [category]="'activities'"></app-activity-list>
      </div>

      <div class="py-5">
        <app-activity-list [activities]="shows$ | async" [category]="'shows'"></app-activity-list>
      </div>

      <div class="py-5">
        <app-activity-list [activities]="restaurants$ | async" [category]="'Food & Beverages'"></app-activity-list>
      </div>
      
      <div class="py-5">
        <app-activity-list [activities]="healthAndBeauty$ | async" [category]="'Health and beauty'"></app-activity-list>
      </div>

      <div class="py-5">
        <app-activity-list [activities]="transport$ | async " [category]="'Transport'"></app-activity-list>
      </div>

      <div class="py-5">
        <app-activity-list [activities]="weRecommend$ | async " [category]="'we recommend'"></app-activity-list>
      </div>

      <div class="py-5">
        <app-activity-list [activities]="shopping$ | async " [category]="'Shopping'"></app-activity-list>
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
  public healthAndBeauty$: Observable<any>;
  public shows$: Observable<any>;
  public transport$: Observable<any>;
  public restaurants$: Observable<any>;
  public shopping$: Observable<any>;
  public weRecommend$: Observable<any>;
  comingSoon = true;

  private subscriptionActivities: ISubscription;
  private subscriptionTours: ISubscription;
  private subscriptionShows: ISubscription;
  private subscriptionHotDeals: ISubscription;
  private subscriptionHealthAndBeauty: ISubscription;
  private subscriptionTransport: ISubscription;
  private subscriptionNightclubs: ISubscription;
  private subscriptionRestaurants: ISubscription;
  private subscriptionShopping: ISubscription;
  private subscriptionWeRecommend: ISubscription;

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.store.dispatch(new GetActivitiesByCategory({name: 'ACTIVITIES', fromLanding: true}));
    this.store.dispatch(new GetActivitiesByCategory({name: 'TOURS', fromLanding: true}));
    this.store.dispatch(new GetActivitiesByCategory({name: 'SHOW', fromLanding: true}));
    this.store.dispatch(new GetActivitiesByCategory({name: 'HEALTHANDBEAUTY', fromLanding: true}));
    this.store.dispatch(new GetActivitiesByCategory({name: 'TRANSPORT', fromLanding: true}));
    this.store.dispatch(new GetActivitiesByCategory({name: 'NIGHTCLUBS', fromLanding: true}));
    this.store.dispatch(new GetActivitiesByCategory({name: 'FOOD&BEVERAGES', fromLanding: true}));
    this.store.dispatch(new GetActivitiesByCategory({name: 'SHOPPING', fromLanding: true}));
    this.store.dispatch(new GetActivitiesByCategory({name: 'PREFERENCEPASSRECOMMENDED', fromLanding: true}));
    this.store.dispatch(new GetHotDeals({ fromLanding: true }));
    this.activities$ = onStateChangeObservable(this.store, 'activities.activities');
    this.tours$ = onStateChangeObservable(this.store, 'activities.tours');
    this.shows$ = onStateChangeObservable(this.store, 'activities.shows');
    this.hotDeals$ = onStateChangeObservable(this.store, 'activities.hotDeals');
    this.healthAndBeauty$ = onStateChangeObservable(this.store, 'activities.healthAndBeauty');
    this.transport$ = onStateChangeObservable(this.store, 'activities.transport');
    this.nightclubs$ = onStateChangeObservable(this.store, 'activities.nightclubs');
    this.restaurants$ = onStateChangeObservable(this.store, 'activities.restaurants');
    this.shopping$ = onStateChangeObservable(this.store, 'activities.shopping');
    this.weRecommend$ = onStateChangeObservable(this.store, 'activities.weRecommend');

    this.subscriptionActivities = this.activities$.subscribe();
    this.subscriptionTours = this.tours$.subscribe();
    this.subscriptionShows = this.shows$.subscribe();
    this.subscriptionHotDeals = this.hotDeals$.subscribe();
    this.subscriptionHealthAndBeauty = this.healthAndBeauty$.subscribe();
    this.subscriptionTransport = this.transport$.subscribe();
    this.subscriptionNightclubs = this.nightclubs$.subscribe();
    this.subscriptionRestaurants = this.restaurants$.subscribe();
    this.subscriptionShopping = this.shopping$.subscribe();
    this.subscriptionWeRecommend = this.weRecommend$.subscribe();
  }

  ngOnDestroy() {
    this.subscriptionActivities.unsubscribe();
    this.subscriptionTours.unsubscribe();
    this.subscriptionShows.unsubscribe();
    this.subscriptionHotDeals.unsubscribe();
    this.subscriptionHealthAndBeauty.unsubscribe();
    this.subscriptionTransport.unsubscribe();
    this.subscriptionNightclubs.unsubscribe();
    this.subscriptionRestaurants.unsubscribe();
    this.subscriptionShopping.unsubscribe();
    this.subscriptionWeRecommend.unsubscribe();

    this.store.dispatch(new GetHotDealsSuccess([]));
    this.store.dispatch(new GetToursSuccess([]));
    this.store.dispatch(new GetActivitiesSuccess([]));
    this.store.dispatch(new GetNightClubsSuccess([]));
    this.store.dispatch(new GetShowsSuccess([]));
    this.store.dispatch(new GetTransportSuccess([]));
    this.store.dispatch(new GetRestaurantsSuccess([]));
    this.store.dispatch(new GetShoppingSuccess([]));
    this.store.dispatch(new GetWeRecommendSuccess([]));
  }
}
