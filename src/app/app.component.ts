import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { onStateChangeObservable } from './utils/store';
import { Store } from '@ngrx/store';
import { UserService } from './services/user.service';
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
  constructor(private router: Router, private store: Store<any>, private userService: UserService) {
      this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0);
      });
  }

  ngOnInit() {
    this.user$ = onStateChangeObservable(this.store, 'auth.user');
  }

  ngAfterViewInit() {
    var loading = <HTMLInputElement>document.getElementById('loading');
    loading.className += " hidden";
  }

}
