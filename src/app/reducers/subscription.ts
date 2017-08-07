const reducers = {};
import { ActionTypes, Actions } from '../actions/subscription';
const initialState = {
  subscription: [],
  loading: false,
  error: '',
  validPPCard: false
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

reducers[ActionTypes.SEARCH_PP_CARD] = (state, payload) => {
  return Object.assign({}, state, {
    loading: true
  });
};

reducers[ActionTypes.SEARCH_PP_CARD_SUCCESS] = (state, payload) => {
  return Object.assign({}, state, {
    loading: false,
    validPPCard: (payload &&  payload.id && !payload.user)
  });
};

export default function reducer(state = initialState, action: Actions) {
  return reducers[action.type] && reducers[action.type](state, action.payload) || state;
};
