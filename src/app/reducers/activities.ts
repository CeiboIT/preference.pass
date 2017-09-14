const reducers = {};
import { ActionTypes, Actions } from '../actions/activities';
const initialState = {
  list: [],
  tours: [],
  activities: [],
  restaurants: [],
  shopping: [],
  healthAndBeauty: [],
  nightclubs: [],
  shows: [],
  hotDeals: [],
  weRecommend: [],
  transport: [],
  selectedActivity: {},
  loading: false,
  error: '',
  departures: [],
  loadingDepartures: false
};

reducers[ActionTypes.GET_LIST] = (state, payload) => {
  return Object.assign({}, state, {
    loading: true
  });
};

reducers[ActionTypes.GET_LIST_SUCCESS] = (state, payload) => {
  return Object.assign({}, state, {
    list: payload,
    loading: false
  });
};


reducers[ActionTypes.GET_LIST_FAILURE] = (state, payload) => {
  return Object.assign({}, state, {
    list: [],
    error: payload,
    loading: false
  });
};

reducers[ActionTypes.GET_DETAIL] = (state, payload) => {
  return Object.assign({}, state, {
    loading: true
  });
};


reducers[ActionTypes.GET_ACTIVITIES_SUCCESS] = (state, payload) => {
  return Object.assign({}, state, {
    activities: payload,
    loading: false
  });
};

reducers[ActionTypes.GET_TOURS_SUCCESS] = (state, payload) => {
  return Object.assign({}, state, {
    tours: payload,
    loading: false
  });
};

reducers[ActionTypes.GET_SHOPPING_SUCCESS] = (state, payload) => {
  return Object.assign({}, state, {
    shopping: payload,
    loading: false
  });
};

reducers[ActionTypes.GET_WE_RECOMMEND_SUCCESS] = (state, payload) => {
  return Object.assign({}, state, {
    weRecommend: payload,
    loading: false
  });
};

reducers[ActionTypes.GET_HEALTH_AND_BEAUTY_SUCCESS] = (state, payload) => {
  return Object.assign({}, state, {
    healthAndBeauty: payload,
    loading: false
  });
};

reducers[ActionTypes.GET_TRANSPORT_SUCCESS] = (state, payload) => {
  return Object.assign({}, state, {
    transport: payload,
    loading: false
  });
};

reducers[ActionTypes.GET_NIGHTCLUBS_SUCCESS] = (state, payload) => {
  return Object.assign({}, state, {
    nightclubs: payload,
    loading: false
  });
};

reducers[ActionTypes.GET_SHOWS_SUCCESS] = (state, payload) => {
  return Object.assign({}, state, {
    shows: payload,
    loading: false
  });
};


reducers[ActionTypes.GET_RESTAURANTS_SUCCESS] = (state, payload) => {
  return Object.assign({}, state, {
    restaurants: payload,
    loading: false
  });
};

reducers[ActionTypes.GET_HOT_DEALS_SUCCESS] = (state, payload) => {
  return Object.assign({}, state, {
    hotDeals: payload,
    loading: false
  });
};


reducers[ActionTypes.GET_DETAIL_FAILURE] = (state, payload) => {
  return Object.assign({}, state, {
    detail: {},
    error: payload,
    loading: false
  });
};

reducers[ActionTypes.GET_DETAIL_SUCCESS] = (state, payload) => {
  return Object.assign({}, state, {
    selectedActivity: payload,
    loading: false
  });
};

reducers[ActionTypes.GET_DEPARTURES] = (state, payload) => {
  return Object.assign({}, state, {
    loadingDepartures: true
  });
};

reducers[ActionTypes.GET_DEPARTURES_SUCCESS] = (state, payload) => {
  return Object.assign({}, state, {
    loadingDepartures: false,
    departures: payload
  });
};



export default function reducer(state = initialState, action: Actions) {
  return reducers[action.type] && reducers[action.type](state, action.payload) || state;
};
