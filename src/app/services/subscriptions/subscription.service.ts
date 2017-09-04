import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import gql from 'graphql-tag';
import {Apollo} from 'apollo-angular';

const server = 'https://payments.preferencepass.xyz/';
const uri = 'subscription/new';
const payPalUri = 'subscription/new/paypal';

@Injectable()
export class SubscriptionService {
  private endpoint = server + uri;
  private payPalEndPoint = server + payPalUri;
  private cardsEndpoint = 'https://payments.preferencepass.xyz';
  private codesEndpoint = 'https://payments.preferencepass.xyz';
  constructor(private http: Http, private client: Apollo) { }

  createAuthorizationHeader(headers:Headers) {
    headers.append('Authorization', `Bearer ${localStorage.getItem('idToken')}`);
  }

  sendSubscription(body) {
    return new Promise((resolve, reject) => {
      var headers = new Headers({
        'Content-Type': 'application/json'
      });

      this.createAuthorizationHeader(headers);
      const subscription = JSON.stringify(body);
      const _endpoint = (body.paymentSource && body.paymentSource !== 'PayPal') ? this.endpoint : this.payPalEndPoint;
      this.http.post(_endpoint, subscription, {
          headers: headers
        }).map((response: Response) => response.json())
        .subscribe(
          data => {
            console.log(data);
            resolve(data);
          },
          err => {
            console.log(err);
            reject(err);
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

  validatePPCard(code) {
    return new Promise((resolve, reject) => {
      const headers = new Headers({
        'Content-Type': 'application/json'
      });
      this.createAuthorizationHeader(headers);
      const payload = JSON.stringify({
        code: code
      });
      this.http.post(this.cardsEndpoint, payload, {
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
      this.http.post(this.codesEndpoint, payload, {
        headers: headers
      }).toPromise()
        .then(response => resolve(response.json()))
        .catch(err => reject(err));
    });
  }


}
