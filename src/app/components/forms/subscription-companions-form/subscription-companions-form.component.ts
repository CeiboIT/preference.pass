import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as _ from 'lodash';
import {FormGroup} from '@angular/forms';
import {MdDialog} from "@angular/material";
import {CompanionChargeFormComponent} from '../companion-charge-form/companion-charge-form.component';

@Component({
  selector: 'app-subscription-companions-form',
  template: `    
    <div>
      <div>
        <md-card class="mb-2">
          <md-card-content>
            <h1 class="title">Available companions</h1>
            <div *ngFor="let companion of selectableUserCompanions" (click)="selectPreviousAddedCompanion(companion)">
              <app-person-element [person]="companion"></app-person-element>
            </div>
          </md-card-content>
        </md-card>
      </div>
      <div>
        <md-card>
          <md-card-content>
            <h2>
              Companions added to this trip 
              <button md-button color="primary" 
                (click)="addNewCompanion()"> Add Companion to this trip
              </button>
            </h2>
            <div *ngFor="let companion of subscriptionMembers">
              <app-person-element [person]="companion"></app-person-element>
            </div>
          </md-card-content>
          
          <md-card-actions>
            <button md-raised-button color="primary" (click)="onSubmitCompanions()">
              Save companions
            </button>
          </md-card-actions>
        </md-card>
      </div>
      
    </div>
  `
})

  /*
let modalConfig = {
  data: {type: 'register'},
  panelClass: 'md-dialog-fullscreen-xs'
};

this.dialog.open(AuthModalComponent, modalConfig)
  .afterClosed().subscribe(result => {
  if (result) this.dispatchAuthAction(result.type, result.data);
});
*/
export class SubscriptionCompanionsFormComponent implements OnInit {
  @Input() userCompanions;
  @Input() subscriptionObserver: Observable<any>;
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  public subscriptionMembers = [];
  public subscription = {};
  constructor(private dialog: MdDialog ) { }

  ngOnInit() {
    this.subscriptionObserver.subscribe((subscription) => {
      if (subscription) {
        this.subscription = subscription;
        this.subscriptionMembers = JSON.parse(JSON.stringify(subscription.companions));
      }
    });
  }

  onSubmitCompanions() {
    this.onSubmit.emit(this.subscriptionMembers);
  }

  selectPreviousAddedCompanion(companion) {
    this.subscriptionMembers.push(companion);
  }
  addNewCompanion() {
    const modalConfig = {
      panelClass: 'md-dialog-fullscreen-xs'
    };

    this.dialog.open(CompanionChargeFormComponent, modalConfig)
      .afterClosed().subscribe(result => {
          if (result) this.subscriptionMembers.push(result);
    });
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
