import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { onStateChangeObservable } from './utils/store';
import {Store} from '@ngrx/store';
import {UserService} from "./services/user.service";

@Component({
  selector: 'app-root',
  template: `    
    <app-toolbar [user]="user$ | async " ></app-toolbar>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
    <app-photoswipe></app-photoswipe>
  `
})
export class AppComponent implements OnInit {
  public user$: Observable<any>;
  constructor(private store: Store<any>, private userService: UserService) {}

  ngOnInit() {
    this.user$ = onStateChangeObservable(this.store, 'auth.user');
    this.user$.subscribe((user) => {
      console.log('User on app module', user);
      this.userService.checkUserCompletion(user);
    });
  }

  ngAfterViewInit() {
    var loading = <HTMLInputElement>document.getElementById('loading');
    loading.className += " hidden";
  }

}
