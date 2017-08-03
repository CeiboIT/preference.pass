import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { tokenNotExpired } from 'angular2-jwt';
@Injectable()
export class AuthGuard implements CanActivate {
  public user$: Observable<any>;
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let valid = false;
    const token =  localStorage.getItem('idToken');
    if (token) {
      valid = tokenNotExpired(token);
    };
    return valid;
  }
}
