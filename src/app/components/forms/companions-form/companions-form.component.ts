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
            *ngIf="!limits.forAdults && !limits.forKids"
            [parent]="newCompanion"
            [adultsLimitReached]="limits.forAdults"
            [kidsLimitReached]="limits.forKids"
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
     this.limits.forKids = !(this.subscription.kids > counts.Kid);
     this.limits.forAdults = !(this.subscription.adults > counts.Adult);
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

}
