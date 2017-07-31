const reducers = {};
import { ActionTypes, Actions } from '../actions/auth';
import { ActionTypes as UserActionTypes, Actions as UserActions} from '../actions/user';
const initialState = {
  user: {},
  loading: false
};


reducers[ActionTypes.REGISTER_WITH_EMAIL_AND_PASSWORD] = (state, payload) => {
  return Object.assign({}, state, {
    loading: true
  });
};

reducers[ActionTypes.REGISTER_WITH_EMAIL_AND_PASSWORD_SUCCESS] = (state, payload) => {
  return Object.assign({}, state, {
    loading: false
  });
};

reducers[UserActionTypes.GET_USER_BASIC_DATA_SUCCESS] = (state, payload) => {
  return Object.assign({}, state, {
    user: payload,
    loading: false
  });
};

reducers[ActionTypes.LOGOUT_SUCCESS] = (state, payload) => {
  return Object.assign({}, state, {
    user: {},
    loading: false
  });
};
export default function reducer(state = initialState, action: Actions) {
  return reducers[action.type] && reducers[action.type](state, action.payload) || state;
};
