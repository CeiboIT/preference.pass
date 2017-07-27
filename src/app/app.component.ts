import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { onStateChangeObservable } from './utils/store';
import {Store} from '@ngrx/store';
@Component({
  selector: 'app-root',
  template: `    
    <app-toolbar [user]="user$ | async "></app-toolbar>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
    <app-photoswipe></app-photoswipe>
  `
})
export class AppComponent implements OnInit {
  public user$: Observable<any>;
  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.user$ = onStateChangeObservable(this.store, 'user.user');
  }

}
