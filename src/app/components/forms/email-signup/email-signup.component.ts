import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-email-signup',
  template: `
    <div [formGroup]="parent">
      <div class="w-100">
        <div>
          <app-email-input [parent]="parent"></app-email-input>
        </div>
        <div>
          <app-user-first-name-input [parent]="parent"></app-user-first-name-input>
        </div>
        <div>
            <app-user-last-name-input [parent]="parent"></app-user-last-name-input>
        </div>
        <div>
            <app-password [parent]="parent"></app-password>
        </div>
        <div class="py-sm-3">
           <app-date-select [parent]="parent" [parentKey]="'birthDate'" [years]="years"></app-date-select>
        </div>
      </div>
    </div>
  `
})
export class EmailSignupComponent implements OnInit {
  @Input() parent: FormGroup;
  constructor() { }
  ngOnInit() {}

  get years() {
    let _years = [];
    const initialYear = 1900;
    for (let i = initialYear; i <= new Date().getFullYear(); i++) {
      _years.unshift(i);
    };
    return _years;
  }

}
