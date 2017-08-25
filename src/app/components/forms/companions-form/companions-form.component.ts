import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import * as _ from 'lodash';

/**
 *
 * {  "companions": [ { "id": "cj6jep4k7m35d0111936g1hzz", "fullName": "Marcos Potignano", "email": "mpotignano@gmail.com", "__typename": "Companion" } ], "__typename": "Subscription" }
 */

@Component({
  selector: 'app-companions-form',
  template: ` 
    <form class="d-flex" action="" novalidate *ngIf="isComingAlone">
       
      <div class="p-2 w-50">
        <md-card class="p-0 text-center">
          <md-card-content class="p-3">
              <app-companion-charge-form
              *ngIf="!limits.forAdults || !limits.forKids"
              [parent]="newCompanion"
              [adultsLimitReached]="limits.forAdults"
              [kidsLimitReached]="limits.forKids"
              (onCompanionSubmit)="submitCompanion($event)"
            >
            </app-companion-charge-form>
          </md-card-content>
        </md-card>
      </div>
        <div class="align-self-stretch p-2 w-100">
          <md-card class="p-0">
            <h1 class="title">Available companions</h1>
            <md-card-content class="p-3">
              <h3 class="sub-title" *ngIf="adultsList.length">Adults</h3>
              <div *ngFor="let adult of adultsList" (click)="selectCompanion(adult)">
                <app-person-element [person]="adult"></app-person-element>
              </div>
              
              <h3 class="sub-title" *ngIf="kidsList.length">Kids</h3>
              <div *ngFor="let kid of kidsList" (click)="selectCompanion(kid)">
                <app-person-element [person]="kid"></app-person-element>
              </div> 
            </md-card-content>
          </md-card>
        </div>
        <div class="p-2 w-100">
          <md-card class="p-0">
            <h1 class="title">Selected companions</h1>
            <md-card-content class="p-3">
              <h3 class="sub-title" *ngIf="selectedAdults.length">Adults</h3>
              <div *ngFor="let adult of selectedAdults">
                <app-person-element [person]="adult"></app-person-element>
              </div>

              <h3 class="sub-title" *ngIf="selectedKids.length">Kids</h3>
              <div *ngFor="let kid of selectedKids">
                <app-person-element [person]="kid"></app-person-element>
              </div>
            </md-card-content>
          </md-card>

        </div>
    </form>

    <!--<form class="row" action="" novalidate>
      <div class="row">
        <div class="col-12">
          <app-companion-charge-form
            *ngIf="!limits.forAdults || !limits.forKids"
            [parent]="newCompanion"
            [adultsLimitReached]="limits.forAdults"
            [kidsLimitReached]="limits.forKids"
            (onCompanionSubmit)="submitCompanion($event)"
          >
          </app-companion-charge-form>
        </div>
      </div>-->

      <!--<div class="row">
        <div class="col-12">
          <div *ngFor="let adult of adultsList">
            <div (click)="selectCompanion(adult)">
              <app-person-card [person]="adult"></app-person-card>
            </div>
          </div>  
        </div>
        <div class="col-12">
          <div *ngFor="let kid of kidsList">
            <div (click)="selectCompanion(kid)">
            <app-person-card [person]="kid"></app-person-card>
            </div>
          </div> 
        </div>
      </div>-->
      
      <!--<div class="row">
        <div class="col-12">
          <div *ngFor="let adult of selectedAdults">
            {{ adult.fullName }}
          </div>
        </div>
        
        <div class="col-12">
          <div *ngFor="let kid of selectedKids">
            {{ kid.fullName }}
          </div>
        </div>
      </div>
    </form>-->
  `,

  styles : [
    `
      .title {
        font-size: 20px;
        padding: 12px 24px;
        margin: 0;
        border-bottom: 1px solid rgba(121, 132, 102, 0.14);
      }

      .sub-title {
        color: rgba(0,0,0,.7);
        display: block;
        font: 600 14px/24px Roboto,Helvetica Neue,sans-serif;
        padding: 16px;
        margin: 0;
      }
    `
  ]
})
export class CompanionsFormComponent implements OnInit {
  @Input() parent: FormGroup;
  @Input() entityKey;
  @Input() subscription;
  @Input() companions;
  @Input() booking;
  @Output() onAddCompanionSubmit: EventEmitter<any> = new EventEmitter();
  public limits = {
    forKids: false,
    forAdults: false
  };
  public kidsList = [];
  public adultsList = [];
  public selectedKids = [];
  public selectedAdults = [];
  public selectedCompanions = [];
  public newCompanion: FormGroup;
  constructor(private fb: FormBuilder) {
    this.newCompanion = fb.group({
      fullName: [''],
      email: [''],
      personType: ['']
    });
  }

  submitCompanion($event) {
    console.log($event);
    this.onAddCompanionSubmit.emit($event);
  }

  selectCompanion(companion) {
    if (companion.personType === 'Adult') {
      const _index = this.selectedAdults.indexOf(companion);
      if ( _index !== -1) {
        this.selectedAdults.splice(_index, 1);
      } else {
        if (this.booking.adultsAmount > this.selectedAdults.length) {
          this.selectedAdults.push(companion);
        }
      }
    }
    if (companion.personType === 'Kid') {
      const _index = this.selectedKids.indexOf(companion);
      if ( _index !== -1) {
       this.selectedKids.splice(_index, 1);
      } else {
        // Check for booking amount first of all
        if (this.booking.kidsAmount > this.selectedKids.length) {
          this.selectedKids.push(companion);
        }
      }
    }
    const allSelections = this.selectedAdults.concat(this.selectedKids);
    console.log(allSelections);
    const ids = _.map(allSelections, o => o.id);
    this.parent.get('companionsIds').setValue(ids);
  }

  get limitAtInit() {
     const counts = _.countBy(this.subscription.companions, 'personType');
     if (this.subscription.kids) {
       if (counts.Kid) {
         this.limits.forKids = !(this.subscription.kids > counts.Kid);
       } else {
         this.limits.forKids = false;

       }
     }
     if (this.subscription.adults) {
       if (counts.Adult) {
        this.limits.forAdults = !(this.subscription.adults > counts.Adult);
       } else {
         this.limits.forKids = false;
       }
     }
     return this.limits;
  }

  generateCompanionsList() {
    if (!this.subscription.isComingAlone) {
        if (this.limitAtInit.forKids ) {
          this.kidsList = _.groupBy(this.subscription.companions, 'personType').Kid || [];
        } else {
          this.kidsList = _.groupBy(this.companions, 'personType').Kid || [];
        }

        if (this.limitAtInit.forAdults) {
          this.adultsList = _.groupBy(this.subscription.companions, 'personType').Adult || [];
        } else {
          this.adultsList = _.groupBy(this.companions, 'personType').Adult || [];
        }
    }
  }

  ngOnInit() {
      this.generateCompanionsList();
  }

  get isLimitReached() {
    return false;
  }

  get subscriptionCompanions() {
    if ( this.subscription && this.subscription.companions ) {
      return this.subscription.companions;
    }
    return [];
  };

  get isComingAlone() {
    return !this.booking.isComingAlone;
  }

}
