import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-discount-code-input',
  template: `
    <div [formGroup]="parent">
      <md-input-container class="input-full-width">
        <input type="text" mdInput placeholder="Discount code" formControlName="code">
      </md-input-container>
    </div>
  `
})
export class DiscountCodeInputComponent implements OnInit {
  @Input() parent: FormGroup;
  constructor() { }

  ngOnInit() {
    this.parent.get('code').setValidators([Validators.required, Validators.minLength(4), Validators.maxLength(4)]);
  }

}
