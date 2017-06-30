import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, Validators, FormControl} from '@angular/forms';
import { NGValidators } from 'ng-validators';

@Component({
  selector: 'app-email-input',
  template: `    
    <div [formGroup]="parent">
      <md-input-container class="input-full-width">
        <input mdInput placeholder="Email" formControlName="email">
      </md-input-container>
    </div>
  `
})
export class EmailInputComponent implements OnInit {
  @Input() parent: FormGroup;
  @Input() required: Boolean = false;
  @Input() showErrors: Boolean = true;

  constructor() { }
  ngOnInit() {
    let validators = [];
    if (this.required) {
      validators = [Validators.required, NGValidators.isEmail];
    } else {
      validators = [NGValidators.isEmail];
    }
    this.parent.addControl('email', new FormControl(validators)) ;
  }
}
