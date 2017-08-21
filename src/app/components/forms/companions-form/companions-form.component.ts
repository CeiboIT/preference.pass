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
    <form class="row" action="" novalidate>
      <div class="row">
        <div class="col-12">
          <app-companion-charge-form
            *ngIf="!limitReached.forAdults && !limitReached.forKids"
            [parent]="newCompanion"
            [adultsLimitReached]="limitReached.forAdults"
            [kidsLimitReached]="limitReached.forKids"
            (onCompanionSubmit)="submitCompanion($event)"
          >
          </app-companion-charge-form>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div *ngFor="let adult of adultsList">
            <p (click)="selectCompanion(adult)">
              {{ adult.fullName}}
            </p>
          </div>  
        </div>
        <div class="col-12">
          <div *ngFor="let kid of kidsList">
            <p (click)="selectCompanion(kid)">
              {{ kid.fullName}}
            </p>
          </div> 
        </div>
      </div>
      
      <div class="row">
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
    </form>
  `
})
export class CompanionsFormComponent implements OnInit {
  @Input() parent: FormGroup;
  @Input() entityKey;
  @Input() subscription;
  @Input() companions;
  @Output() onAddCompanionSubmit: EventEmitter<any> = new EventEmitter();
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
    console.log(companion);
    if (companion.personType === 'Adult') {
      const _index = this.selectedAdults.indexOf(companion);
      if ( _index !== -1) {
        this.selectedAdults.splice(_index, 1);
      } else {
        this.selectedAdults.push(companion);
      }
    }

    if (companion.personType === 'Kid') {
      const _index = this.selectedKids.indexOf(companion);
      if ( _index !== -1) {
       this.selectedKids.splice(_index, 1);
      } else {
        this.selectedKids.push(companion);
      }
    }
  }

  get limitReached() {
     const counts = _.countBy(this.subscription.companions, 'personType');
     let limits = {
       forKids : false,
       forAdults: false
     };
     limits.forKids = !(this.subscription.kids >= counts.Kid);
     limits.forAdults = !(this.subscription.adults >= counts.Adult);

     return limits;
  }

  generateCompanionsList() {
    if (!this.subscription.isComingAlone) {
        if (this.limitReached.forKids ) {
          this.kidsList = _.groupBy(this.subscription.companions, 'personType').Kid || [];
        } else {
          this.kidsList = _.groupBy(this.companions, 'personType').Kid || [];
        }

        if (this.limitReached.forAdults) {
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

}
