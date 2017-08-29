const reducers = {};
import { ActionTypes, Actions } from '../actions/auth';
import { ActionTypes as UserActionTypes } from '../actions/user';

const initialState = {
  user: {},
  loading: false,
  addingCompanion: false
};

const mockSubscription = {
  kids: 1,
  adults: 1,
  isComingAlone: false,

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

reducers[UserActionTypes.ADD_COMPANION] = (state, payload) => {
  return Object.assign({}, state, {
    addingCompanion: true
  });
};

reducers[UserActionTypes.ADD_COMPANION_SUCCESS] = (state, payload) => {
  console.log('Going to add companions on success on reducer');
  return Object.assign({}, state, {
    addingCompanion: false
  });
};

reducers[UserActionTypes.ADD_COMPANION_FAILURE] = (state, payload) => {
  return Object.assign({}, state, {
    addingCompanion: false
  });
};

export default function reducer(state = initialState, action: Actions) {
  return reducers[action.type] && reducers[action.type](state, action.payload) || state;
};
