const reducers = {};
import { ActionTypes, Actions } from '../actions/auth';
const initialState = {
  user: {},
  loading: false
};

const mockSubscription = {
  kids: 1,
  adults: 1,
  isComingAlone: false
};

const mockSubscription2 = {
  isComingAlone: true
};


reducers[ActionTypes.REGISTER_WITH_EMAIL_AND_PASSWORD] = (state, payload) => {
  return Object.assign({}, state, {
    loading: true
  });
};

reducers[ActionTypes.REGISTER_WITH_EMAIL_AND_PASSWORD_SUCCESS] = (state, payload) => {
  return Object.assign({}, state, {
    user: payload,
    loading: false
  });
};

export default function reducer(state = initialState, action: Actions) {
  return reducers[action.type] && reducers[action.type](state, action.payload) || state;
};
