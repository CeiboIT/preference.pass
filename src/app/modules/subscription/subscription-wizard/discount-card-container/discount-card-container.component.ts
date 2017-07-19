import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-discount-card-container',
  template: `
    <div [formGroup]="parent">
      <h2>
        Enter a discount card
      </h2>
      <app-discount-card-form [parent]="parent"></app-discount-card-form>
      <div class="d-flex justify-content-end">
        <button md-raised-button class="mr-2" (click)="hasDiscountCardChangeStatus()">
          CANCEL
        </button>
        <button md-raised-button color="primary" (click)="hasDiscountCardChangeStatus()">
          OK
        </button>
      </div>
    </div>
  `
})
export class DiscountCardContainerComponent implements OnInit {
  @Input() parent: FormGroup;
  @Output() hasDiscountCardChangeEvent: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() { }

  hasDiscountCardChangeStatus() {
    this.hasDiscountCardChangeEvent.emit(false);
  }

}
