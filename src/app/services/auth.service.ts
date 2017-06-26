import { Injectable } from '@angular/core';
import {UserAuth, AuthWithEmail } from '../models/auth';
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

  registerWithEmail(data: AuthWithEmail) {
    return new Promise((resolve, reject) => {
      auth0.signup({
        connection: 'Username-Password-Authentication',
        username: data.email,
        password: data.password,
        popup: false,
        auto_login: true
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
}
