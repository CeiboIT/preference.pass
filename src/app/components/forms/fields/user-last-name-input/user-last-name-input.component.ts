import { Component, OnInit, Input } from '@angular/core';
import {FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-user-last-name-input',
  template: `
    <div [formGroup]="parent">
      <md-input-container class="input-full-width">
        <input mdInput placeholder="Last Name" formControlName="lastName">
      </md-input-container>
    </div>
  `
})
export class UserLastNameInputComponent implements OnInit {
  @Input() parent: FormGroup;
  @Input() required: Boolean = false;
  @Input() showErrors: Boolean = true;
  constructor() { }

  ngOnInit() {
    this.parent.addControl('lastName', new FormControl([Validators.required]));
  }

}
