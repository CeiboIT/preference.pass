import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import {
  ActionTypes, GetActivitiesSuccess, GetDeparturesSuccess,
  GetDetail,
  GetDetailFailure,
  GetDetailSuccess,
  GetList,
  GetListFailure,
  GetListSuccess, GetToursSuccess
} from '../actions/activities';
import { ActivitiesQueries } from '../services/activities/queries';
import { ActivitiesService } from '../services/activities/activities.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Injectable()
export class ActivitiesEffects {
  constructor(
    private action$: Actions,
    private activitiesService: ActivitiesService,
    private activitiesQueries: ActivitiesQueries
  ) {}

  @Effect()
  GetToursList: Observable<{}> = this.action$
    .ofType(ActionTypes.GET_TOURS)
    .map(action => action.payload)
    .switchMap((payload) => {
      return this.activitiesQueries.getActivitiesByCategory('tours')
        .map((result) => {
          return new GetListSuccess(
            result.data['allActivities']
          );
        })
        .catch(() => Observable.of({ type: ActionTypes.GET_LIST_FAILURE }));
    });


  @Effect()
  GetActivitiesByCategory: Observable<{}> = this.action$
    .ofType(ActionTypes.GET_ACTIVITIES_BY_CATEGORY)
    .map(action => action.payload)
    .mergeMap((payload) => {
      return this.activitiesQueries.getActivitiesByCategory(payload.name)
        .map((result) => {
          const _data = result.data['allActivities'];
          if (payload.fromLanding) {
            switch (payload.name) {
              case('TOURS'):
                return new GetToursSuccess(_data);
              case('ACTIVITIES'):
                return new GetActivitiesSuccess(_data);
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
          console.log(result)
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
          console.log(result);
          return new GetDeparturesSuccess(
            result.data['allPickUpLocations']
          );
        })
        .catch((err) => { console.log(err);
        return Observable.of({ type: ActionTypes.GET_DETAIL_FAILURE })});
    });
}
