import { Component, OnInit, Input } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-user-fullname',
  template: `
    <div [formGroup]="parent">
      <md-input-container class="input-full-width">
        <input mdInput placeholder="Fullname" formControlName="fullName">
      </md-input-container>
    </div>
  `
})
export class UserFullnameComponent implements OnInit {
  @Input() parent: FormGroup;
  @Input() required: Boolean = false;
  @Input() showErrors: Boolean = true;
  constructor() { }

  ngOnInit() {;
  }

}
