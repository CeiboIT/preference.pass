import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { generateDatesInterval } from '../../../../utils/dates';
import * as moment from 'moment';
const plans = [
  'OneDay',
  'FourDays',
  'SevenDays',
  'FourteenDays'
];

@Component({
  selector: 'app-subscription-start-date',
  template: `
    <div [formGroup]="parent">
      <div class="material-select-custom">
        <select formControlName="startsAt">
          <option *ngFor="let date of selectableDates" [value]="date.toISOString()">
            {{ date.format('MMMM DD YYYY')  }}
          </option>
        </select>
        <label for="select">Subscription Starting Date</label><i class="bar"></i>
      </div>
    </div>
  `
})
export class SubscriptionStartDateComponent implements OnInit {
  @Input() parent: FormGroup;
  @Input() limitDate;
  @Input() initialDate;
  @Input() selectedPlan;
  plan;
  selectableDates;

  constructor() { }
  ngOnInit() {
    this.plan = this.parent.get('plan').value;
    this.parent.get('plan').valueChanges.subscribe((data) => {
      console.log(data);
      if (data) {
        this.generateSelectableDates(data);
        this.plan = data;
        this.parent.get('startsAt').setValue(this.initialDate);
      }
    });
    this.parent.get('startsAt').setValue(this.initialDate);
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

  generateSelectableDates(plan) {
    let _dates = [];
    const _selectedDate = moment(this.limitDate).clone();
    let _initialDate;
    if (plan) {
      switch (plan) {
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
    this.selectableDates = _dates;
    return _dates;
  }
}
