import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-email-login',
  template: `
    <div class="row" [formGroup]="parent">
      <div class="col-12">
        <app-email-input [parent]="parent" [required]="mailRequired"></app-email-input>
      </div>
      <div class="col-12">
        <app-password [parent]="parent"></app-password>
      </div>
    </div>
  `
})
export class EmailLoginComponent implements OnInit {
  @Input() parent: FormGroup;
  public mailRequired = true;
  constructor() { }
  ngOnInit() {
  }

}
