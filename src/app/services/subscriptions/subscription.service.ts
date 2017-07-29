import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Rx";

const server = 'http://localhost:3030/';
const uri = 'subscription/new';

@Injectable()
export class SubscriptionService {
  private endpoint = server + uri;
  
  constructor(private http: Http) { }

  sendSubscription(body) {
    return new Promise((resolve, reject) => {
      let subscription = JSON.stringify(body);
      this.http.post(this.endpoint, subscription) 
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