import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { ISubscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { GetDetail } from '../../../actions/activities';
import { onStateChangeObservable } from '../../../utils/store';
import 'rxjs/add/operator/switchMap';
import { isSubscriptionValid } from '../../../utils/user';
import { UserService } from '../../../services/user.service';
import { MoveToStep } from '../../../actions/booking';
@Component({
  selector: 'app-activity-container',
  template: `
    <app-activity-detail [activity]="activity$ | async" 
                         [user]="user$ | async" 
                         (selectedRate)="onRateSelected($event)" *ngIf="activity.id">
    </app-activity-detail>
    <div *ngIf="!activity.id" class="mb-5">
      <activity-detail-loader></activity-detail-loader>
    </div>
  `
})
export class ActivityContainerComponent implements OnInit {
  public id: number;
  public activity$: Observable<any>;
  public user$: Observable<any>;
  public user;
  public activity;
  
  private subscriptionActivity: ISubscription;
  private subscriptionUser: ISubscription;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store<any>,
    private userService: UserService
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.store.dispatch(new GetDetail(id));
    this.activity$ = onStateChangeObservable(this.store, 'activities.selectedActivity');
    this.user$ = onStateChangeObservable(this.store, 'auth.user');
    this.user$.subscribe(user => this.user = user);
    this.activity$.subscribe(activity => this.activity = activity);
    this.activity = {};

    this.subscriptionActivity = this.activity$.subscribe();
    this.subscriptionUser = this.user$.subscribe();
  }

  bookNow($event) {
    console.log('Booking now');
    this.userService.checkUserCompletion(this.user, (goToNext) => {
      if (goToNext) {

        this.router.navigate(['booking/wizard/' + this.activity.id]);
      }
    });
  }

  onRateSelected($event) {
    console.log('Rate selected on Container', $event);
    this.store.dispatch(new MoveToStep({step: 'Details'}));

    /*if (!isSubscriptionValid(this.user)) {
      this.router.navigate(['subscription/wizard']);
    }*/
    const navigateTo = 'booking/wizard/' + this.activity.id;
    if (this.activity.rates && this.activity.rates.length > 1) {
      this.router.navigate([navigateTo], {queryParams: {
        rateId: $event.id
      }});
    } else {
      this.router.navigate([navigateTo]);
    }

    /*this.userService.checkUserCompletion(this.user, (goToNext) => {
      if (goToNext) {
        this.router.navigate([navigateTo]);
      }
    }, false, {
      onSuccessRedirect: navigateTo
    });*/
  }

  ngOnDestroy() {
    this.subscriptionActivity.unsubscribe();
    this.subscriptionUser.unsubscribe();
  }
}
