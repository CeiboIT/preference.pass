import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-datepicker',
  template: `
    <md-form-field class="w-100">
      <input mdInput [min]="minDate" [max]="maxDate" [mdDatepicker]="picker"
             (dateChange)="onDateChange($event)"
             [placeholder]="placeholder"
      >
      <md-datepicker-toggle mdSuffix [for]="picker"></md-datepicker-toggle>
      <md-datepicker #picker></md-datepicker>
    </md-form-field>
  `
})
export class DatepickerComponent implements OnInit {
  @Input() minDate;
  @Input() maxDate;
  @Input() placeholder;
  @Input() parent: FormGroup;
  @Input() parentKey;
  constructor() { }

  ngOnInit() {

  }

  onDateChange($event) {

  }

}
