import * as moment from 'moment';

export const generateDatesInterval = (from, to) => {
  const diff = to.diff(from, 'days');
  const _init = moment(from);
  let _from = _init.clone();
  let _dates = [];

  for (let i = 0; i <= diff; i++) {
    _dates.unshift(
      _from.clone().add(i, 'days')
    );
  }

  return _dates;
};
