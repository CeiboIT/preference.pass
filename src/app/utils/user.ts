import * as moment from 'moment';
const today = moment();
import * as jwtDecode from 'jwt-decode';
export const isSubscriptionValid = (user) => {
  const _validUntil = (user.subscription) ? moment(user.subscription.validity) : null;
  return (_validUntil && _validUntil.diff(today, 'days') >= 0);
};

export const isComingAlone = (user) => {
  return ( user.subscription && user.subscription.isComingAlone);
};

export const hasSubscription = (user) => {
  return (user && user.id && user.subscription && user.subscription.id);
};

export const hasPreferencePassCard = (user) => {
  return (user && user.id && user.preferencePassCard && user.preferencePassCard.id);
};

export const getUserIdFromToken = () => {
  const token = localStorage.getItem('idToken');
  const decode = jwtDecode(token);
  let userId;
  if (decode) {
    userId =  decode['userId'];
  }
  return userId;
};
