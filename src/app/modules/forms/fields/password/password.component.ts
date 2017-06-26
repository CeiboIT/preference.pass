import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-password',
  template: `
    <div [formGroup]="parent">
      <md-input-container>
        <input mdInput placeholder="Password" formControlName="password">
      </md-input-container>

      <md-input-container *ngIf="confirmPassword">
        <input mdInput placeholder="Confirm Password" formControlName="password">
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
