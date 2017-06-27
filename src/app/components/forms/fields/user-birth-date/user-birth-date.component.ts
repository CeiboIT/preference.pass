import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-user-birth-date',
  template: `
    <md-input-container *ngIf="isDatePicker">
      <input mdInput [mdDatepicker]="myDatepicker">
      <button mdSuffix [mdDatepickerToggle]="myDatepicker"></button>
    </md-input-container>
    <md-datepicker #myDatepicker></md-datepicker>
    
    <div fxFlex>
      
    </div>
  `
})
export class UserBirthDateComponent implements OnInit {
  @Input() parent: FormGroup;
  @Input() showAs: String = 'calendar';
  constructor() { }

  ngOnInit() {
  }

  get isDatePicker() {
    this.showAs === 'datepicker';
  }

}
