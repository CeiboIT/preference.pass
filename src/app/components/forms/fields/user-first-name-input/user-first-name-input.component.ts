import { Component, OnInit, Input } from '@angular/core';
import {FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-user-first-name-input',
  template: `    
    <div [formGroup]="parent">
      <md-input-container class="input-full-width">
        <input mdInput placeholder="First Name" formControlName="firstName">
      </md-input-container>
    </div>
  `
})
export class UserFirstNameInputComponent implements OnInit {
  @Input() parent: FormGroup;
  @Input() required: Boolean = false;
  @Input() showErrors: Boolean = true;
  constructor() { }
  ngOnInit() {
    this.parent.addControl('firstName', new FormControl([Validators.required]));
  }

}
