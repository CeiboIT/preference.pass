const reducers = {};
import { ActionTypes, Actions } from '../actions/booking';
import { ActionTypes as SubscriptionActions } from '../actions/subscription';

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
    sending: false,
    booking: {
      id : payload.id
    }
  });
};

reducers[ActionTypes.BOOKING_STEP1_FAILURE] = (state, payload) => {
  return Object.assign({}, state, {
    sending: false
  });
};

reducers[ActionTypes.MOVE_TO_STEP] = (state, payload) => {
    return Object.assign({}, state, {
      sending: false,
      currentStep: payload.step,
      loadingBooking: false,
      activeSubscription: payload.subscription
    });
};

reducers[ActionTypes.GET_BOOKING_SUBSCRIPTION_SUCCESS] = (state, payload) => {
  return Object.assign({}, state, {
    sending: false,
    activeSubscription: payload.subscription
  });
};
reducers[ActionTypes.BOOKING_FINISH] = (state, payload) => {
  return Object.assign({}, state, {
    loadingBooking: true
  });
};

reducers[ActionTypes.BOOKING_FINISH_SUCCESS] = (state, payload) => {
  return Object.assign({}, state, {
    loadingBooking: false
  });
};

reducers[ActionTypes.BOOKING_FINISH_FAILURE] = (state, payload) => {
  return Object.assign({}, state, {
    loadingBooking: false
  });
};

export default function reducer(state = initialState, action: Actions) {
  return reducers[action.type] && reducers[action.type](state, action.payload) || state;
};
