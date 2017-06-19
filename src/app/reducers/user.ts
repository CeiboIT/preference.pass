const reducers = {};
import * as user from '../actions/user';
const initialState = {
  loading: false
};

export default function reducer(state = initialState, action: user.Actions) {
  return reducers[action.type] && reducers[action.type](state, action.payload) || state;
};
