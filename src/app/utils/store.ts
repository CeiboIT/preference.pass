import * as _ from 'lodash';
import {Observable} from 'rxjs/Observable';
import 'rxjs/operator/let';

export function onStateChange(store, path, cb) {
  store.let( store => store.select(state => _.get(state, path))).subscribe(cb);
}

export function onStateChangeObservable(store, path) {
  return Observable.create((observer) => {
    store.select(state => _.get(state, path))
      .subscribe((result) => {
        observer.next(result);
      });
  });
}
