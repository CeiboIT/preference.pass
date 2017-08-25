import * as moment from 'moment';

export const generateDatesInterval = (from, to) => {
  const diff = to.diff(from, 'days');
  const _init = moment(from);
  let _from = _init.clone();
  let _dates = [];
    if (diff === 1) {
      _dates.unshift(_from.clone());
      _dates.unshift(_from.clone().add(1, 'days'));
    } else {
    for (let i = 1; i <= diff; i++) {
      _dates.unshift(
        _from.clone().add(i, 'days')
      );
    }
  }


  return _dates;
};
