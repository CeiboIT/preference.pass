import * as moment from 'moment';
const today = moment();

export const isSubscriptionValid = (user) => {
  const _validUntil = (user.subscription) ? moment(user.subscription.validity) : null;
  return (_validUntil && _validUntil.diff(today, 'days') >= 0);
};

export const isComingAlone = (user) => {
  return ( user.subscription && user.subscription.isComingAlone);
};
