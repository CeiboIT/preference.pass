const reducers = {};
import { ActionTypes, Actions } from '../actions/subscription';
const initialState = {
  subscription: [],
  loading: false,
  error: ''
};

reducers[ActionTypes.POST_SUBSCRIPTION] = (state, payload) => {
  return Object.assign({}, state, {
    loading: true
  });
};

reducers[ActionTypes.POST_SUBSCRIPTION_SUCCESS] = (state, payload) => {
  return Object.assign({}, state, {
    subscription: payload,
    loading: false
  });
};


reducers[ActionTypes.POST_SUBSCRIPTION_FAILURE] = (state, payload) => {
  return Object.assign({}, state, {
    subscription: [],
    error: payload,
    loading: false
  });
};

export default function reducer(state = initialState, action: Actions) {
  return reducers[action.type] && reducers[action.type](state, action.payload) || state;
};
