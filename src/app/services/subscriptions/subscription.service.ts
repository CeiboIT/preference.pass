import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { environment } from '../../../environments/environment';

@Injectable()
export class SubscriptionService {
  constructor(private http: Http, private client: Apollo) { }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', `Bearer ${localStorage.getItem('idToken')}`);
  }

  checkUserSubscriptions() {
    return new Promise((resolve, reject) => {
      var headers = new Headers({
        'Content-Type': 'application/json'
      });
      this.createAuthorizationHeader(headers);
      this.http.get(environment.api.subscriptionsEndpoint + '/check-user', {
        headers: headers
      }).map((response: Response) => response.json())
        .subscribe(
          data => {
            console.log(data);
            resolve(data);
          },
          err => {
            console.log(err);
            reject(err._body);
          }
        );
    });
  }

  sendSubscription(body) {
    return new Promise((resolve, reject) => {
      var headers = new Headers({
        'Content-Type': 'application/json'
      });

      this.createAuthorizationHeader(headers);
      const subscription = JSON.stringify(body);
      this.http.post(environment.api.subscriptionsEndpoint, subscription, {
          headers: headers
        }).map((response: Response) => response.json())
        .subscribe(
          data => {
            console.log(data);
            resolve(data);
          },
          err => {
            console.log(err);
            reject(err._body);
          }
        );


    });
  }

  sendSubscriptionMail(body) {
    return new Promise((resolve, reject) => {
      var headers = new Headers({
        'Content-Type': 'application/json'
      });

      this.createAuthorizationHeader(headers);
      const reservationId = body.id;
      this.http.post(environment.mailing.booking + reservationId, {
          headers: headers
        }).map((response: Response) => response.json())
        .subscribe(
          data => {
            console.log(data);
            resolve(data);
          },
          err => {
            console.log(err);
            reject(err._body);
          }
        );


    });
  }

  getCompanions(subscriptionId) {
    const GET_SUBSCRIPTION_COMPANIONS = gql`      
        query getSubscriptionCompanions($subscriptionId: ID!) {
          Subscription(id: $subscriptionId) {
            id
            fullName
            email
            personType
          }
        }
    `;
    return this.client.watchQuery({
      query: GET_SUBSCRIPTION_COMPANIONS,
      variables: {
        subscriptionId: subscriptionId
      }
    });
  }

  validatePPCard(payload) {
    return new Promise((resolve, reject) => {
      const headers = new Headers({
        'Content-Type': 'application/json'
      });
      this.createAuthorizationHeader(headers);
      const _body = JSON.stringify(payload);
      this.http.post(environment.api.cardsEndpoint, _body, {
        headers: headers
      }).toPromise()
        .then(response => resolve(response.json()))
        .catch(err => reject(err));
    });


  }

  validateDiscountCode(code) {
    return new Promise((resolve, reject) => {
      const headers = new Headers({
        'Content-Type': 'application/json'
      });
      this.createAuthorizationHeader(headers);
      const payload = JSON.stringify({
        code: code
      });
      this.http.post(environment.api.codesEndpoint, payload, {
        headers: headers
      }).toPromise()
        .then(response => resolve(response.json()))
        .catch(err => reject(err));
    });
  }


}
