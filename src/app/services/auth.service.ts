import { Injectable } from '@angular/core';
import {UserAuth} from '../models/auth';
declare const Auth0: any;

const auth0 = new Auth0({
  domain:       'preferencepassdevelopment.auth0.com',
  clientID:     'i5q_2LeZ99i8-V83pm2cirIpCpmoH3J1',
  callbackURL:  'http://localhost:4200',
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
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
}
