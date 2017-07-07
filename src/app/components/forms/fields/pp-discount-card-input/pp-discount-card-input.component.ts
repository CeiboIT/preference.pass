import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-pp-discount-card-input',
  template: `    
    <div [formGroup]="parent">
      <md-input-container class="input-full-width">
        <input mdInput placeholder="Discount Card" formControlName="discountCardCode">
      </md-input-container>
    </div>
  `
})
export class PpDiscountCardInputComponent implements OnInit {
  @Input() parent: FormGroup;
  constructor() { }
  ngOnInit() { }
}
