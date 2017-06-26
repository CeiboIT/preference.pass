import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-email-signup',
  template: `
    <div [formGroup]="parent">
      <app-email-input [parent]="parent"></app-email-input>
      <app-user-first-name-input [parent]="parent"></app-user-first-name-input>
      <app-user-last-name-input [parent]="parent"></app-user-last-name-input>
      <app-password [parent]="parent"></app-password>
    </div>
  `
})
export class EmailSignupComponent implements OnInit {
  @Input() parent: FormGroup;
  constructor() { }
  ngOnInit() {}

}
