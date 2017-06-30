import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {
  ActionTypes, GetList, GetListFailure, GetListSuccess, GetDetail, GetDetailSuccess, GetDetailFailure
} from '../actions/activities';
import {ActivitiesService} from '../services/activities/activities.service';

@Injectable()
export class ActivitiesEffects {
  constructor(
    private action$: Actions, 
    private activitiesService: ActivitiesService
  ) {}

  @Effect()
  GetActivitiesList: Observable<{}> = this.action$
    .ofType(ActionTypes.GET_LIST)
    .map(action => action.payload)
    .switchMap((payload) => {
      return this.activitiesService.getAllActivities()
        .then(result => new GetListSuccess(result))
        .catch(error => new GetListFailure(error));
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
