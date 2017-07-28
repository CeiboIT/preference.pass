import { Injectable } from '@angular/core';
import { Http, Response, Headers , RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Rx";
import { baseAPIUrl } from '../../constants/api'

const uri = 'subscription/new';

@Injectable()
export class SubscriptionService {
  
  private endpoint = baseAPIUrl + uri;
  
  constructor(private http: Http) { }

  sendSubscription(body) {
    debugger
    return new Promise((resolve, reject) => {
      let subscription = JSON.stringify(body);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });

      this.http.post(this.endpoint, subscription, options) 
      .map((response: Response) => response.json())
      .subscribe(
        data => { 
          console.log(data);
          resolve(data);
        },
        err => reject(err)
      );
    })
  }

}
