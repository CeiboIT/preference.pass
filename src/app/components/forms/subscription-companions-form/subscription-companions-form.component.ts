import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as _ from 'lodash';

@Component({
  selector: 'app-subscription-companions-form',
  template: `    
    <div>
      <div>
        <md-card class="p-0">
          <md-card-content class="p-3">
            <h1 class="title">Available companions</h1>
            <div *ngFor="let companion of selectableUserCompanions" (click)="selectPreviousAddedCompanion(companion)">
              <app-person-element [person]="companion"></app-person-element>
            </div>
          </md-card-content>
        </md-card>
      </div>
      <div>
        <md-card class="p-0">
          <md-card-content class="p-3">
            <h2>
              Companions added to this trip <button md-button color="primary"> Add Companion to this trip</button>
            </h2>
            <div *ngFor="let companion of subscriptionMembers">
              <app-person-element [person]="companion"></app-person-element>
            </div>
          </md-card-content>
        </md-card>
      </div>
      <div>
        <button md-button color="primary">
          Save
        </button>
      </div>
      
    </div>
  `
})
export class SubscriptionCompanionsFormComponent implements OnInit {
  @Input() userCompanions;
  @Input() subscriptionObserver: Observable<any>;
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  public subscriptionMembers = [];
  public subscription = {};
  constructor() { }

  ngOnInit() {
    this.subscriptionObserver.subscribe((subscription) => {
      if (subscription) {
        this.subscription = subscription;
        this.subscriptionMembers = JSON.parse(JSON.stringify(subscription.companions));
      }
    });
  }

  selectPreviousAddedCompanion(companion) {
    this.subscriptionMembers.push(companion);
  }

  get selectableUserCompanions() {
    let _list = _.clone(this.userCompanions);
    if (this.subscriptionMembers.length) {
      this.subscriptionMembers.map((member) => {
        _list.some((companion, i) => {
            if (member.id === companion.id) {
             _list.splice(i, 1);
              return true;
            }
        });
      });
    }
    return _list;
  }


}
