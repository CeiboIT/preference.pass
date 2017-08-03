import { Injectable } from '@angular/core';
declare var auth0: any;
import { Subject } from 'rxjs/Subject';
import { tokenNotExpired } from 'angular2-jwt';
import { Store } from '@ngrx/store';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {UserService} from './user.service';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import {GetUserBasicData} from '../actions/user';
// const auth0ClientID = 'hdVqOGTjXxo0yaJwAqD8Ckx2IiA5m4vr'; // development
// const auth0Domain = 'sof.au.auth0.com'; // development

const serverUrl = window.location.protocol + '//' + window.location.hostname + ':' + window.location.port;
const redirectTo = serverUrl + '/access_token';

const auth0ClientID = 'i5q_2LeZ99i8-V83pm2cirIpCpmoH3J1'; // production
const auth0Domain = 'preferencepassdevelopment.auth0.com'; // production
const PROJECT_ID = 'cj41c9u2zddol0177la66g30g'; // GraphCoolProjectID


function getHashValue(key) {
  const matches = location.hash.match(new RegExp(key + '=([^&]*)'));
  return matches ? matches[1] : null;
}

const webAuth = new auth0.WebAuth(
  {
    domain: auth0Domain,
    clientID: auth0ClientID,
    responseType: 'token',
    redirectUri: redirectTo
  }
);


@Injectable()
export class AuthService {

  public authStatus = new Subject();
  public userProfile;
  private headers: Headers = new Headers({
    'content-type': 'application/json'
  });
  constructor(private store: Store<{}>, private http: Http, private userService: UserService, private client: Apollo) {
    this.getCurrentUser();
  }

  getAuthStatusThread() {
    return this.authStatus;
  }

  logOut() {
    return new Promise((resolve, reject) => {
      localStorage.removeItem('idToken');
      localStorage.setItem('logout', 'true');
      webAuth.logout({});
      resolve();
    });
  }

  getCurrentUser = () => {
    this.store.dispatch(new GetUserBasicData({}));
  };

  facebookLogin() {
    return new Promise((resolve, reject) => {
      webAuth.authorize({
        connection: 'facebook',
        responseType: 'token id_token'
      });
    });
  }

  googleLogin() {
    return new Promise((resolve, reject) => {
      webAuth.authorize({
        connection: 'google-oauth2',
        responseType: 'token id_token'
      });
    });
  }

  passswordLessSignUp(signUpData) {
    return new Promise((resolve, reject) => {
      webAuth.passwordlessStart({email: signUpData.email, connection: 'email', send: 'link'}, (err) => {
        if (err) {
          alert(err.error_description);
          reject(err);
        } else {
          resolve({success: true});
        }
      });
    });
  }

  parseHash = () => {
    return new Promise((resolve, reject) => {
      if (window.location.hash.length) {


        const idToken = getHashValue('id_token');
        const accessToken = getHashValue('access_token');

        console.log('idToken', idToken);
        console.log('accessToken', accessToken);

        const _headers = {'content-type': 'application/json'};
        const _body = JSON.stringify({
          query: `
          mutation authenticateAuth0User($idToken: String!, $accessToken: String!) {
            authenticateAuth0User(idToken: $idToken, accessToken: $accessToken) {
              token
            }
          }
        `,
          variables: {
            idToken: idToken,
            accessToken: accessToken,
          }
        });

        this.http.post('https://api.graph.cool/simple/v1/' + PROJECT_ID, _body, {headers: this.headers})
          .toPromise()
          .then((response) => {
            const _response = response.json();
            if (!_response['errors']) {
              localStorage.setItem('idToken', _response['data']['authenticateAuth0User']['token']);
              resolve(response.json());
            } else {
              reject(_response);
            }
          })
          .catch((err) => {
            console.log(err);
            reject(err);
          });

        /* webAuth.parseHash(window.location.hash, (err, data) => {
          if (err) {
            reject(err);
          } else {
            localStorage.setItem('id_token', data.idToken);
            localStorage.setItem('access_token', data.accessToken);

            this.getCurrentUser()
              .then((user) => {
                this.userProfile = user;
                this.authStatus.next(user);
                resolve(user);
              });
          }
        }); */
      } else {
        window.location.replace(window.location.host);
      }
    });
  }

  loggedIn = () => {
    return tokenNotExpired();
  }

  getAuthToken = () => {
    return localStorage.getItem('idToken');
  }
}
