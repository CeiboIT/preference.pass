import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-discount-code-input',
  template: `
    <div [formGroup]="parent">
      <md-input-container class="input-full-width">
        <input mdInput placeholder="Discount code" formControlName="code">
        <md-hint align="start"><strong [ngClass]="{'text-success': validCode, 'text-danger': !validCode}">{{ message }}</strong> </md-hint>
        <md-hint align="end">{{ parent.get('code').value.length }} / 4</md-hint>
      </md-input-container>
    </div>
  `
})
export class DiscountCodeInputComponent implements OnInit {
  @Input() parent: FormGroup;
  @Input() message;
  @Input() validCode;
  constructor() { }

  ngOnInit() {
    this.parent.get('code').setValidators([Validators.required, Validators.minLength(4), Validators.maxLength(4)]);
  }

}
