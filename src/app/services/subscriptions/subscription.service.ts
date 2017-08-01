import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from "rxjs/Rx";

const server = 'http://localhost:3030/';
const uri = 'subscription/new';

@Injectable()
export class SubscriptionService {
  private endpoint = server + uri;
  
  constructor(private http: Http) { }

  createAuthorizationHeader(headers:Headers) {
    headers.append('Authorization', `Bearer ${localStorage.getItem('idToken')}`);
  }

  sendSubscription(body) {
    return new Promise((resolve, reject) => {
      var headers = new Headers();
      this.createAuthorizationHeader(headers);
      headers.append('Content-Type', 'application/json');

      let subscription = JSON.stringify(body);
      this.http.post(this.endpoint, subscription, {
        headers: headers
      }) 
      .map((response: Response) => response.json())
      .subscribe(
        data => { 
          console.log(data);
          resolve(data);
        },
        err => {
          console.log(err);
          reject(err)
        }
      );
    })
  }

}