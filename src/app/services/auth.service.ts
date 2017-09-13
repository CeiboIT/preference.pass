import { Injectable } from '@angular/core';
import auth0 from 'auth0-js';
import { Subject } from 'rxjs/Subject';
import { tokenNotExpired } from 'angular2-jwt';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/toPromise';
import { UserService} from './user.service';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { GetUserBasicData } from '../actions/user';
import { onStateChangeObservable } from '../utils/store';
import { getUserIdFromToken } from '../utils/user';
import { environment } from "../../environments/environment";

declare var window: any;
const serverUrl = window.location.protocol + '//' + window.location.hostname + ':' + window.location.port;
// const serverUrl = 'https://preference-pass-testing.firebaseapp.com';
const redirectTo = serverUrl + '/access_token';
const PROJECT_ID = 'cj41c9u2zddol0177la66g30g'; // GraphCoolProjectID

const auth0ClientID = environment.auth0.clientID;
const auth0Domain = environment.auth0.domain;

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
  constructor(private store: Store<{}>, private userService: UserService, private client: Apollo) {
    this.getCurrentUser();
  }

  logOut() {
    return new Promise((resolve, reject) => {
      localStorage.removeItem('idToken');
      localStorage.removeItem('access_token');
      localStorage.setItem('logout', 'true');
      webAuth.logout({
        returnTo: serverUrl
      });
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
        console.log('IdToken', idToken);
        console.log('access token', accessToken);
        this.userService.authenticateUser(idToken, accessToken).subscribe((result) => {
          const token = result['data']['authenticateAuth0User']['token'];
          console.log('Token', token);
          localStorage.setItem('idToken', token);

          getUserIdFromToken() === 'undefined' ? this.parseHash() : this.getCurrentUser();

          resolve(result);
        },
          (err) => {
            resolve(err);
          }
        );
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
