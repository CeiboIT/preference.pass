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
  GET_HEALTH_AND_BEAUTY_SUCCESS: type('[Activities] Get Health and Beauty Success'),
  GET_HEALTH_AND_BEAUTY_FAILURE: type('[Activities] Get Health and Beauty Failure'),
  GET_ACTIVITIES_SUCCESS: type('[Activities] Get Activities Success'),
  GET_ACTIVITIES_FAILURE: type('[Activities] Get Activities Failure'),
  GET_NIGHTCLUBS_SUCCESS: type('[Activities] Get Nightclubs Success'),
  GET_NIGHTCLUBS_FAILURE: type('[Activities] Get Nightclubs Failure'),
  GET_RESTAURANTS_SUCCESS: type('[Activities] Get Restaurants Success'),
  GET_RESTAURANTS_FAILURE: type('[Activities] Get Restaurants Failure'),
  GET_WE_RECOMMEND_SUCCESS: type('[Activities] Get We Recommend Success'),
  GET_WE_RECOMMEND_FAILURE: type('[Activities] Get We Recommend Failure'),
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
  GET_TRANSPORT_SUCCESS: type('[Activities] Get Transport Success'),
  GET_TRANSPORT_FAILURE: type('[Activities] Get Transport Failure'),
  GET_SHOPPING_SUCCESS: type('[Activities] Get Shopping Success'),
  GET_SHOPPING_FAILURE: type('[Activities] Get Shopping Failure'),
  GET_FOODANDBEVERAGE_SUCCESS: type('[Activities] Get Foodandbeverage Success'),
  GET_FOODANDBEVERAGE_FAILURE: type('[Activities] Get Foodandbeverage Failure'),
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


export class GetWeRecommendSuccess implements Action {
  type = ActionTypes.GET_WE_RECOMMEND_SUCCESS;
  constructor(public payload: any) { }
}

export class GetWeRecommendFailure implements Action {
  type = ActionTypes.GET_WE_RECOMMEND_FAILURE;
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


export class GetShowsSuccess implements Action {
  type = ActionTypes.GET_SHOWS_SUCCESS;
  constructor(public payload: any) { }
}

export class GetShowsFailure implements Action {
  type = ActionTypes.GET_SHOWS_FAILURE;
  constructor(public payload: any) { }
}

export class GetHealthAndBeautySuccess implements Action {
  type = ActionTypes.GET_HEALTH_AND_BEAUTY_SUCCESS;
  constructor(public payload: any) { }
}

export class GetHealthAndBeautyFailure implements Action {
  type = ActionTypes.GET_HEALTH_AND_BEAUTY_FAILURE;
  constructor(public payload: any) { }
}

export class GetNightClubsSuccess implements Action {
  type = ActionTypes.GET_NIGHTCLUBS_SUCCESS;
  constructor(public payload: any) { }
}

export class GetNightClubsFailure implements Action {
  type = ActionTypes.GET_NIGHTCLUBS_FAILURE;
  constructor(public payload: any) { }
}

export class GetTransportSuccess implements Action {
  type = ActionTypes.GET_TRANSPORT_SUCCESS;
  constructor(public payload: any) { }
}

export class GetTransportFailure implements Action {
  type = ActionTypes.GET_TRANSPORT_FAILURE;
  constructor(public payload: any) { }
}

export class GetShoppingSuccess implements Action {
  type = ActionTypes.GET_SHOPPING_SUCCESS;
  constructor(public payload: any) { }
}

export class GetShoppingFailure implements Action {
  type = ActionTypes.GET_SHOPPING_FAILURE;
  constructor(public payload: any) { }
}

export class GetFoodandbeverageSuccess implements Action {
  type = ActionTypes.GET_FOODANDBEVERAGE_SUCCESS;
  constructor(public payload: any) { }
}

export class GetFoodandbeverageFailure implements Action {
  type = ActionTypes.GET_FOODANDBEVERAGE_FAILURE;
  constructor(public payload: any) { }
}


export class GetRestaurantsFailure implements Action {
  type = ActionTypes.GET_RESTAURANTS_FAILURE;
  constructor(public payload: any) { }
}

export class GetRestaurantsSuccess implements Action {
  type = ActionTypes.GET_RESTAURANTS_SUCCESS;
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
  GetHotDeals | GetHotDealsSuccess | GetHotDealsFailure | GetShowsSuccess | GetShowsFailure |
  GetTransportSuccess | GetTransportFailure | GetShoppingFailure | GetShoppingSuccess | GetWeRecommendFailure | GetWeRecommendSuccess
  | GetFoodandbeverageFailure | GetActivitiesByCategorySuccess | GetRestaurantsSuccess | GetRestaurantsFailure;
