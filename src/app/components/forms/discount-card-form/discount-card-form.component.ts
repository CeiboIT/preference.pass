import { Component, OnInit, Input } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-discount-card-form',
  template: `
      <form novalidate [formGroup]="parent">
        <app-pp-discount-card-input [parent]="parent"></app-pp-discount-card-input>
      </form>
  `
})
export class DiscountCardFormComponent implements OnInit {
  @Input() parent: FormGroup;
  constructor() { }
  ngOnInit() { }
}
