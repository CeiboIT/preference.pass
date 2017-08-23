import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { generateDatesInterval } from '../../../../utils/dates';
import * as moment from 'moment';

@Component({
  selector: 'app-subscription-start-date',
  template: `
    <div [formGroup]="parent" >
      <select placeholder="Subscription Starting Date" formControlName="startsAt">
        <option *ngFor="let date of selectableDates" [value]="date">
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
    this.parent.get('plan').valueChanges.subscribe(data => {
      if (data) {
        this.plan = data;
        this.selectableDates = this.generateSelectableDates();
        this.parent.get('startsAt').setValue(this.initialDate);
      }
    });
    this.generateSelectableDates();
    this.parent.get('startsAt').setValue(this.initialDate);
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
