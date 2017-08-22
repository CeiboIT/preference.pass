const reducers = {};
import { ActionTypes, Actions } from '../actions/booking';

// Status ---> Details, Details Companions Subscription Completed

const initialState = {
  currentStep: '',
  loadingActivity: false,
  loadingDepartures: false,
  loadingBooking: false,
  booking: {},
  sending: false,
  activeSubscription: ''
};

reducers[ActionTypes.BOOKING_STEP1] = (state, payload) => {
  return Object.assign({}, state, {
    sending: true
  });
};


reducers[ActionTypes.BOOKING_STEP1_SUCCESS] = (state, payload) => {
  return Object.assign({}, state, {
    sending: true,
    booking: {
      id : payload.id
    }
  });
};

reducers[ActionTypes.MOVE_TO_STEP] = (state, payload) => {
    return Object.assign({}, state, {
      sending: false,
      currentStep: payload.step,
      activeSubscription: payload.subscription
    });
};

export default function reducer(state = initialState, action: Actions) {
  return reducers[action.type] && reducers[action.type](state, action.payload) || state;
};
