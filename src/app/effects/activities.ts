import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import {
  ActionTypes,
  GetDetail,
  GetDetailFailure,
  GetDetailSuccess,
  GetList,
  GetListFailure,
  GetListSuccess
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
  GetActivitiesList: Observable<{}> = this.action$
    .ofType(ActionTypes.GET_LIST)
    .map(action => action.payload)
    .switchMap((payload) => {
      return this.activitiesQueries.getAllActivities()
        .map((result)=>{
            return new GetListSuccess(
              result.data['allActivities']
            )
          })
          .catch(() => Observable.of({ type: ActionTypes.GET_LIST_FAILURE }))
    });

  @Effect()
  GetActivityDetail: Observable<{}> = this.action$
    .ofType(ActionTypes.GET_DETAIL)
    .map(action => action.payload)
    .switchMap((payload) => {
      return this.activitiesService.getActivityByID(payload)
        .then(result => new GetDetailSuccess(result))
        .catch(error => new GetDetailFailure(error));
    });
}
