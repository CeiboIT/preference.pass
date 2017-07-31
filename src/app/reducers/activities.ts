const reducers = {};
import { ActionTypes, Actions } from '../actions/activities';
const initialState = {
  list: [],
  tours: [],
  activities: [],
  restaurants: [],
  healthAndBeauty: [],
  nightclubs: [],
  hotDeals: [],
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

reducers[ActionTypes.GET_NIGHTCLUBS_SUCCESS] = (state, payload) => {
  return Object.assign({}, state, {
    nightclubs: payload,
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
