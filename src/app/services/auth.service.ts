/*
import { Injectable } from '@angular/core';
import {UserAuth, AuthWithEmail } from '../models/auth';
import {Subject} from 'rxjs/Subject';
import {tokenNotExpired} from 'angular2-jwt';
declare const Auth0: any;

const redirectTo = 'http://' + location.host + '/access_token';

const auth0 = new Auth0({
  domain:       'preferencepassdevelopment.auth0.com',
  clientID:     'i5q_2LeZ99i8-V83pm2cirIpCpmoH3J1',
  callbackURL:  redirectTo,
  responseType: 'token'
});

@Injectable()
export class AuthService {
  public userProfile;
  public authStatus = new Subject();
  constructor() { }

  passwordLessEmail(data: UserAuth) {
    return new Promise((resolve, reject) => {
      auth0.requestMagicLink({
        email: data.email
      }, (err) => {
        if (err) {
          console.log(err.error_description);
          reject(err.error_description);
        } else {
          resolve();
        }
      });
    });
  }

  authWithFacebook(type) {
    return new Promise((resolve, reject) => {
      auth0.login({
        connection: 'facebook',
        popup: false,
        sso: false
      }, (err, result) => {
        if (err) {
          reject('Error on signin:' + err.message);
        } else {
          console.log('Sucess sign up with Facebook login!');
          this.getAuthUser(result.idToken)
            .then((profile) => resolve(profile))
            .catch((error => reject(error)));
        }
      });
    });
  }

  authWithGoogle(type) {
    return new Promise((resolve, reject) => {
      auth0.login({
        connection: 'google-oauth2',
        popup: false,
        sso: false
      }, (err, result) => {
        if (err) {
          reject('Error on signin:' + err.message);
        } else {
          console.log('Sucess sign up with Google login!');
          this.getAuthUser(result.idToken)
            .then((profile) => resolve(profile))
            .catch((error => reject(error)));
        }
      });
    });
  }

  registerWithEmail(data: AuthWithEmail) {
    return new Promise((resolve, reject) => {
      auth0.signup({
        connection: 'Username-Password-Authentication',
        username: data.email,
        password: data.password,
        popup: false,
        auto_login: true,
        sso: false
      }, (err, result) => {
        if (err) {
          reject('Something went wrong: ' + err.message);
        } else {
          console.log('Sucess sign up with login login!');
          this.getAuthUser(result.idToken)
            .then((profile) => resolve(profile))
            .catch((error => reject(error)));
        }
      });
    });
  }

  getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      // const id = localStorage.getItem('id_token');
      const accessToken = localStorage.getItem('access_token');
      if (accessToken && tokenNotExpired()) {
        auth0.getProfile(accessToken, (err, user) => {
          if (err) {
            console.log('Getting profile error', err);
            // reject(err);
            localStorage.setItem('id_token', JSON.parse(localStorage.getItem('user')).token);
            resolve(JSON.parse(localStorage.getItem('user')));
          } else {
            user.token = localStorage.getItem('id_token');
            localStorage.setItem('user', JSON.stringify(user));
            resolve(user);
          }
        });
      } else if (accessToken && !tokenNotExpired()) {
        const previousUser = JSON.parse(localStorage.getItem('user'));
        if (previousUser) {
          resolve(previousUser);
        }
      } else {
        resolve();
      }
    });
  }

  parseHash = () => {
    return new Promise((resolve, reject) => {
      if (window.location.hash.length) {
        const result = auth0.parseHash(window.location.hash);

        if (result && result.idToken) {
          localStorage.setItem('id_token', result.idToken);
          localStorage.setItem('access_token', result.accessToken);

          this.getCurrentUser()
            .then((user) => {
              this.userProfile = user;
              this.authStatus.next(user);
              resolve(user);
            });

        } else {
          window.location.replace(window.location.host);
        }
      };
    });
  };


  getAuthUser(idToken) {
    return new Promise((resolve, reject) => {
      auth0.getProfile(idToken, (err, result) => {
        if(err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

  }

  get authObserver() {
    return this.authStatus;

  }
}*/

import { Injectable } from '@angular/core';
export class AuthService {
  constructor() {}


}
