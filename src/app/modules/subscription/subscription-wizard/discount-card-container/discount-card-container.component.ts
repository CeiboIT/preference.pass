import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-discount-card-container',
  template: `
    <div [formGroup]="parent">
      <app-discount-card-form [parent]="parent"></app-discount-card-form>
    </div>
  `
})
export class DiscountCardContainerComponent implements OnInit {
  @Input() parent: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
