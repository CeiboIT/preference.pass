import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { generateDatesInterval } from '../../../../utils/dates';
import * as moment from 'moment';

@Component({
  selector: 'app-subscription-start-date',
  template: `
    <div [formGroup]="parent">
      <!-- <div *ngIf="!showSelect">
        <md-card  (click)="selectDate(date)" *ngFor="let date of selectableDates">
          <md-card-content>
            {{
            date.format('MMMM DD YYYY')
            }}
          </md-card-content>
        </md-card>        
      </div> -->
      
      <select placeholder="Subscription Starting Date" formControlName="startsAt">
        <option *ngFor="let date of selectableDates" [value]="date.toISOString()">
          {{ date.format('MMMM DD YYYY')  }}
        </option>
      </select>
    </div>
  `
})
export class SubscriptionStartDateComponent implements OnInit {
  @Input() parent: FormGroup;
  @Input() limitDate;
  @Input() initialDate;
  plan;
  selectableDates;
  constructor() { }
  ngOnInit() {
    this.plan = this.parent.get('plan').value;
    this.parent.get('plan').valueChanges.subscribe((data) => {
      console.log(data);
      if (data) {
        this.plan = data;
        this.selectableDates = this.generateSelectableDates();
        this.parent.get('startsAt').setValue(this.initialDate);
      }
    });
    this.parent.get('startsAt').setValue(this.initialDate);
    this.generateSelectableDates();
  }

  selectDate(date) {
    this.parent.get('startsAt').setValue(date.toISOString());
  }

  get showSelect(){
    if (this.selectableDates) {
      return this.selectableDates.length > 5;
    } else {
      return false;
    }
  }

  generateSelectableDates() {
    let _dates = [];
    const _selectedDate = moment(this.limitDate).clone();
    let _initialDate;
    if (this.plan) {
      switch (this.plan) {
        case('OneDay'):
          _initialDate = _selectedDate.clone().subtract(1, 'day');
          break;
        case('FourDays'):
          _initialDate = _selectedDate.clone().subtract(4, 'day');
          break;
        case('SevenDays'):
          _initialDate = _selectedDate.clone().subtract(7, 'day');
          break;
        case('FourteenDays'):
          _initialDate = _selectedDate.clone().subtract(14, 'day');
          break;
      }
      _dates = generateDatesInterval(_initialDate, _selectedDate);
    } else {
      _dates.push(_selectedDate);
    }
    return _dates;
  }

}
