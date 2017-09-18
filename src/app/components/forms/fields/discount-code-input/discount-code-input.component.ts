import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-discount-code-input',
  template: `
    <div [formGroup]="parent">
      <md-input-container class="input-full-width">
        <input mdInput placeholder="Discount code" formControlName="code">        
        <md-hint align="start">
          <strong [ngClass]="{'text-success': validCode, 'text-danger': !validCode}">{{ message }}</strong>
          <span *ngIf="loading"><i class="fa fa-spinner fa-spin"></i> </span>
        </md-hint>
        <md-hint align="end">{{ parent.get('code').value.length }} / 4</md-hint>
      </md-input-container>
    </div>
  `
})
export class DiscountCodeInputComponent implements OnInit {
  @Input() parent: FormGroup;
  @Input() message;
  @Input() validCode;
  @Input() loading;
  constructor() { }

  ngOnInit() {
    this.parent.get('code').setValidators([Validators.required, Validators.minLength(4), Validators.maxLength(4)]);
  }

}
