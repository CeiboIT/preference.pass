import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import {
  ActionTypes, GetActivitiesSuccess, GetDeparturesSuccess,
  GetDetailSuccess, GetHealthAndBeautySuccess, GetHotDealsSuccess,
  GetListSuccess, GetNightClubsSuccess, GetRestaurantsSuccess, GetShoppingSuccess, GetShowsSuccess, GetToursSuccess,
  GetTransportSuccess, GetWeRecommendSuccess
} from '../actions/activities';
import { ActivitiesQueries } from '../services/activities/queries';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class ActivitiesEffects {
  constructor(
    private action$: Actions,
    private activitiesQueries: ActivitiesQueries
  ) {}

  @Effect()
  GetHotDeals: Observable<{}> = this.action$
    .ofType(ActionTypes.GET_HOT_DEALS)
    .map(action => action.payload)
    .mergeMap((payload) => {
      let query;
        if (payload.fromLanding) {
          query = this.activitiesQueries.getHotDeals(10);
        } else {
          query = this.activitiesQueries.getHotDeals();
        }
      return query
        .map((result) => {
          return new GetHotDealsSuccess(
            result.data['allHotDeals']
          );
        })
        .catch((err) => {
          console.log(err);
          return Observable.of({ type: ActionTypes.GET_HOT_DEALS_FAILURE, payload: err });
        } );
    });

  @Effect()
  GetActivitiesByCategory: Observable<{}> = this.action$
    .ofType(ActionTypes.GET_ACTIVITIES_BY_CATEGORY)
    .map(action => action.payload)
    .mergeMap((payload) => {
      let query;
      if (payload.fromLanding) {
        query = this.activitiesQueries.getActivitiesByCategory(payload.name, 10);
      } else {
        query = this.activitiesQueries.getActivitiesByCategory(payload.name);
      }
      return query.map((result) => {
        const _data = result.data['allActivities'];
        if (payload.fromLanding) {
          switch (payload.name) {
            case('TOURS'):
              return new GetToursSuccess(_data);
            case('ACTIVITIES'):
              return new GetActivitiesSuccess(_data);
            case('NIGHTCLUBS'):
              return new GetNightClubsSuccess(_data);
            case('SHOW'):
              return new GetShowsSuccess(_data);
            case('HEALTHANDBEAUTY'):
              return new GetHealthAndBeautySuccess(_data);
            case('TRANSPORT'):
              return new GetTransportSuccess(_data);
            case('RESTAURANTS'):
              return new GetRestaurantsSuccess(_data);
            case('SHOPPING'):
              return new GetShoppingSuccess(_data);
            case('PREFERENCEPASSRECOMMENDED'):
              return new GetWeRecommendSuccess(_data);
          }
        } else {
          return new GetListSuccess(_data);
        }
      })
        .catch(() => Observable.of({ type: ActionTypes.GET_LIST_FAILURE }));

    });

  @Effect()
  GetActivityDetail: Observable<{}> = this.action$
    .ofType(ActionTypes.GET_DETAIL)
    .map(action => action.payload)
    .switchMap((payload) => {
      return this.activitiesQueries.getActivityByID(payload)
        .map((result) => {
            return new GetDetailSuccess(
              result.data['Activity']
            )
          })
          .catch(() => Observable.of({ type: ActionTypes.GET_DETAIL_FAILURE }))
    });

  @Effect()
  GetDepartures: Observable<{}> = this.action$
    .ofType(ActionTypes.GET_DEPARTURES)
    .map(action => action.payload)
    .switchMap((payload) => {
      return this.activitiesQueries.getActivityDepartures(payload)
        .map((result) => {
          return new GetDeparturesSuccess(
            result.data['allPickUpLocations']
          );
        })
        .catch((err) => { console.log(err);
        return Observable.of({ type: ActionTypes.GET_DETAIL_FAILURE })});
    });
}
