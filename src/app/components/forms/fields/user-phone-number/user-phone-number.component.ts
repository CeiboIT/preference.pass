import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-user-phone-number',
  template: `
    <div [formGroup]="parent">
      <md-input-container class="input-full-width">
        <input mdInput placeholder="Phone number" formControlName="phoneNumber">
      </md-input-container>
    </div>
  `
})
export class UserPhoneNumberComponent implements OnInit {
  @Input() parent: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
