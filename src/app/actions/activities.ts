import { Action } from '@ngrx/store';
import { type } from '../util';

export const ActionTypes = {
  GET_LIST: type('[Activities] Get List'),
  GET_LIST_FAILURE: type('[Activities] Get List Failure'),
  GET_LIST_SUCCESS: type('[Activities] Get List Success'),
  GET_HOT_DEALS: type('[Activities] Get Hot Deals'),
  GET_HOT_DEALS_SUCCESS: type('[Activities] Get Hot Deals Success'),
  GET_HOT_DEALS_FAILURE: type('[Activities] Get Hot Deals Failure'),
  GET_TOURS: type('[Activities] Get Tours'),
  GET_TOURS_SUCCESS: type('[Activities] Get Tours Success'),
  GET_TOURS_FAILURE: type('[Activities] Get Tours Failure'),
  GET_ACTIVITIES_SUCCESS: type('[Activities] Get Activities Success'),
  GET_ACTIVITIES_FAILURE: type('[Activities] Get Activities Failure'),
  GET_NIGHTCLUBS_SUCCESS: type('[Activities] Get Nightclubs Success'),
  GET_NIGHTCLUBS_FAILURE: type('[Activities] Get Nightclubs Failure'),
  GET_SHOWS_SUCCESS: type('[Activities] Get Shows Success'),
  GET_SHOWS_FAILURE: type('[Activities] Get Shows Failure'),
  GET_ACTIVITIES_BY_CATEGORY: type('[Activities] Get Activities by Category'),
  GET_ACTIVITIES_BY_CATEGORY_SUCCESS: type('[Activities] Get Activities by Category Success'),
  GET_ACTIVITIES_BY_CATEGORY_FAILURE: type('[Activities] Get Activities by Category Failure'),
  GET_DETAIL: type('[Activities] Get Detail'),
  GET_DETAIL_FAILURE: type('[Activities] Get Detail Failure'),
  GET_DETAIL_SUCCESS: type('[Activities] Get Detail Success'),
  GET_DEPARTURES: type('[Activities] Get Departures'),
  GET_DEPARTURES_SUCCESS: type('[Activities] Get Departures Success'),
  GET_DEPARTURES_FAILURE: type('[Activities] Get Departures Failure'),
};

export class GetList implements Action {
  type = ActionTypes.GET_LIST;
  constructor(public payload: any) { }
}

export class GetListFailure implements Action {
  type = ActionTypes.GET_LIST_FAILURE;
  constructor(public payload: any) { }
}

export class GetListSuccess implements Action {
  type = ActionTypes.GET_LIST_SUCCESS;
  constructor(public payload: any) { }
}

export class GetTours implements Action {
  type = ActionTypes.GET_TOURS;
  constructor(public payload: any) { }
}

export class GetToursFailure implements Action {
  type = ActionTypes.GET_TOURS_FAILURE;
  constructor(public payload: any) { }
}

export class GetToursSuccess implements Action {
  type = ActionTypes.GET_TOURS_SUCCESS;
  constructor(public payload: any) { }
}

export class GetHotDeals implements Action {
  type = ActionTypes.GET_HOT_DEALS;
  constructor(public payload: any) { }
}

export class GetHotDealsFailure implements Action {
  type = ActionTypes.GET_HOT_DEALS_FAILURE;
  constructor(public payload: any) { }
}

export class GetHotDealsSuccess implements Action {
  type = ActionTypes.GET_HOT_DEALS_SUCCESS;
  constructor(public payload: any) { }
}

export class GetActivitiesFailure implements Action {
  type = ActionTypes.GET_ACTIVITIES_FAILURE;
  constructor(public payload: any) { }
}

export class GetActivitiesSuccess implements Action {
  type = ActionTypes.GET_ACTIVITIES_SUCCESS;
  constructor(public payload: any) { }
}

export class GetNightClubsSuccess implements Action {
  type = ActionTypes.GET_NIGHTCLUBS_SUCCESS;
  constructor(public payload: any) { }
}

export class GetShowsSuccess implements Action {
  type = ActionTypes.GET_SHOWS_SUCCESS;
  constructor(public payload: any) { }
}

export class GetShowsFailure implements Action {
  type = ActionTypes.GET_SHOWS_FAILURE;
  constructor(public payload: any) { }
}

export class GetNightClubsFailure implements Action {
  type = ActionTypes.GET_NIGHTCLUBS_FAILURE;
  constructor(public payload: any) { }
}

export class GetDetail implements Action {
  type = ActionTypes.GET_DETAIL;
  constructor(public payload: any) { }
}

export class GetDetailFailure implements Action {
  type = ActionTypes.GET_DETAIL_FAILURE;
  constructor(public payload: any) { }
}

export class GetDetailSuccess implements Action {
  type = ActionTypes.GET_DETAIL_SUCCESS;
  constructor(public payload: any) { }
}

export class GetDepartures implements Action {
  type = ActionTypes.GET_DEPARTURES;
  constructor(public payload: any) { }
}

export class GetDeparturesSuccess implements Action {
  type = ActionTypes.GET_DEPARTURES_SUCCESS;
  constructor(public payload: any) { }
}

export class GetDeparturesFailure implements Action {
  type = ActionTypes.GET_DEPARTURES_FAILURE;
  constructor(public payload: any) { }
}

export class GetActivitiesByCategory implements Action {
  type = ActionTypes.GET_ACTIVITIES_BY_CATEGORY;
  constructor(public payload: any) { }
}

export class GetActivitiesByCategorySuccess implements Action {
  type = ActionTypes.GET_ACTIVITIES_BY_CATEGORY_SUCCESS;
  constructor(public payload: any) { }
}

export class GetActivitiesByCategoryFailure implements Action {
  type = ActionTypes.GET_ACTIVITIES_BY_CATEGORY_FAILURE;
  constructor(public payload: any) { }
}

export type Actions = GetList | GetListFailure | GetListSuccess |
GetDetail | GetDetailFailure | GetDetailSuccess | GetTours | GetToursFailure | GetToursSuccess
| GetDepartures | GetDeparturesSuccess | GetDeparturesFailure | GetActivitiesFailure | GetActivitiesSuccess
| GetActivitiesByCategory | GetActivitiesByCategorySuccess |
  GetActivitiesByCategoryFailure | GetNightClubsSuccess | GetNightClubsFailure |
  GetHotDeals | GetHotDealsSuccess | GetHotDealsFailure | GetShowsSuccess | GetShowsFailure;
