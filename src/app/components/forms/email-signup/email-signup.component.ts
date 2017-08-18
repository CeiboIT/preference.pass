import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-email-signup',
  template: `
    <div class="row" [formGroup]="parent">
      <div class="col-12">
        <app-email-input [parent]="parent"></app-email-input>
      </div>
    </div>
  `
})
export class EmailSignupComponent implements OnInit {
  @Input() parent: FormGroup;
  constructor() { }

  ngOnInit() { }
}
