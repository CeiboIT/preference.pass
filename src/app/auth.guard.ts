import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from "@ngrx/store";
import { Observable } from 'rxjs/Observable';
import { tokenNotExpired } from 'angular2-jwt';
import { OpenLogin } from './actions/layout';

@Injectable()
export class AuthGuard implements CanActivate {
  public user$: Observable<any>;
  constructor(
    private router: Router, 
    private store: Store<any>
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const token = localStorage.getItem('idToken');

    if (token) {
      return !tokenNotExpired(token);
    } else {
      this.router.navigate(['/']);
      this.store.dispatch(new OpenLogin({}));
      return false;
    }
  }
}
