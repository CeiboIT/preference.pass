import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { GetDetail } from '../../../actions/activities';
import { onStateChangeObservable } from '../../../utils/store';
import 'rxjs/add/operator/switchMap';
import { isSubscriptionValid } from '../../../utils/user';
@Component({
  selector: 'app-activity-container',
  template: `
    <app-activity-detail [activity]="activity$ | async" 
                         [user]="user$ | async" 
                         (selectedRate)="onRateSelected($event)">
    </app-activity-detail>
  `
})
export class ActivityContainerComponent implements OnInit {
  public id: number;
  public activity$: Observable<any>;
  public user$: Observable<any>;
  public user;
  public activity;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store<any>
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.store.dispatch(new GetDetail(id));
    this.activity$ = onStateChangeObservable(this.store, 'activities.selectedActivity');
    this.user$ = onStateChangeObservable(this.store, 'auth.user');
    this.user$.subscribe(user => this.user = user);
    this.activity$.subscribe(activity => this.activity = activity);
  }

  onRateSelected($event) {
    console.log('Rate selected on Container', $event);
    /*if (!isSubscriptionValid(this.user)) {
      this.router.navigate(['subscription/wizard']);
    }*/
    this.router.navigate(['booking/wizard/' + this.activity.id]);
  }

}
