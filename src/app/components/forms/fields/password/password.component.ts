import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-password',
  template: `
    <div [formGroup]="parent">
      <md-input-container class="input-full-width">
        <input type="password" mdInput placeholder="Password" formControlName="password">
      </md-input-container>
      <md-input-container class="input-full-width" *ngIf="confirmPassword">
        <input mdInput type="password" placeholder="Confirm Password" formControlName="password">
      </md-input-container>
    </div>
  `
})
export class PasswordComponent implements OnInit {
  @Input() parent: FormGroup;
  @Input() confirmPassword = false;
  constructor() {}

  ngOnInit() {
    if (this.confirmPassword) {
      this.parent.get('password').valueChanges.subscribe((value) => {

      });
    }
  }

}
