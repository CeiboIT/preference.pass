import { Component, OnInit, Input } from '@angular/core';
import {FormGroup} from '@angular/forms';
import * as _ from 'lodash';
@Component({
  selector: 'app-subscription-companion-select-form',
  template: `
      <md-card class="mb-2">
        <md-card-content>
          <div [formGroup]="parent">
            <div>
              <h2>
                Available companions
              </h2>
              <div class="mb-3">
                <span class="mr-3">Kids: {{ remainingKids }}</span>

                <span>Adults: {{ remainingAdults }}</span>
              </div>
              <div *ngFor="let companion of availableCompanions" (click)="companionSelected(companion)">
                <!--{{ companion.fullName }}-->
                <app-person-element [person]="companion"></app-person-element>
              </div>
            </div>
            <div>
              <h2>
                Selected Companions
              </h2>
              {{ selectedKids }}
              <div *ngIf="selectedKids.length">
                <h3>
                  Selected kids
                </h3>
                <div *ngFor="let kid of selectedKids" (click)="removeCompanion(kid)">
                  <app-person-element [person]="kid"></app-person-element>
                  <!--{{ kid.fullName }}-->
                </div>
              </div>
              {{ selectedAdults }}
              <div *ngIf="selectedAdults.length">
                <h3>
                  Selected Adults
                </h3>
                <div *ngFor="let adult of selectedAdults" (click)="removeCompanion(adult)">
                  <app-person-element [person]="adult"></app-person-element>
                  <!--{{ adult.fullName }}-->
                </div>
              </div>
            </div>
          </div>
        </md-card-content>
      </md-card>
  `
})
export class SubscriptionCompanionSelectFormComponent implements OnInit {
  @Input() parent: FormGroup;
  @Input() subscription;
  @Input() kidsAmount;
  @Input() adultsAmount;
  selectedKids = [];
  selectedAdults = [];
  selectedCompanions = [];
  selectedCompanionsIds = [];
  constructor() { }

  ngOnInit() {

  }

  companionSelected(companion) {
    if (companion.personType === 'Kid' && this.remainingKids) {
      this.selectedKids.push(companion);
    }
    if (companion.personType === 'Adult' && this.remainingAdults) {
        this.selectedAdults.push(companion);
    }
    this.selectedCompanions.push(companion);
    this.selectedCompanionsIds.push(companion.id);
    this.parent.get('companionsIds').setValue(this.selectedCompanionsIds);
  }
  get remainingKids() {
    return this.kidsAmount - this.selectedKids.length;
  }
  get remainingAdults() {
    return this.adultsAmount - this.selectedAdults.length;
  }
  get availableCompanions() {
    if(this.subscription) {
      let _list = _.clone(this.subscription.companions);
      if (this.selectedCompanions.length) {
        this.selectedCompanions.map((member) => {
          _list.some((companion, i) => {
            if (member.id === companion.id) {
              _list.splice(i, 1);
              return true;
            }
          });
        });
      }
      return _list;
    } else {
      return [];
    }
  }

  removeCompanion(companion) {
    if (companion) {
      if( companion.personType === 'Kid') {
        const kidIndex = this.selectedKids.indexOf(companion);
        this.selectedKids.splice(kidIndex, 1);
      } else {
        const adultIndex = this.selectedAdults.indexOf(companion);
        this.selectedKids.splice(adultIndex, 1);
      }
    }
    const companionIndex = this.selectedCompanions.indexOf(companion);
    this.selectedCompanions.splice(companionIndex, 1);
    const companionIdIndex = this.selectedCompanionsIds.indexOf(companion.id);
    this.selectedCompanionsIds.splice(companionIdIndex, 1);
    this.parent.get('companionsIds').setValue(this.selectedCompanionsIds);
  }

}
