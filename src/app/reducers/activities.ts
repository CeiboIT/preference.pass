const reducers = {};
import { ActionTypes, Actions } from '../actions/activities';
const initialState = {
  list: [],
  tours: [],
  restaurants: [],
  healthAndBeauty: [],
  detail: {},
  loading: false,
  error: ''
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

reducers[ActionTypes.GET_DETAIL_FAILURE] = (state, payload) => {
  return Object.assign({}, state, {
    detail: {},
    error: payload,
    loading: false
  });
};

reducers[ActionTypes.GET_DETAIL_SUCCESS] = (state, payload) => {
  return Object.assign({}, state, {
    detail: payload,
    loading: false
  });
};

export default function reducer(state = initialState, action: Actions) {
  return reducers[action.type] && reducers[action.type](state, action.payload) || state;
};
