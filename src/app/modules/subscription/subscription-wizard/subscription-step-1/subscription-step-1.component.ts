import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-subscription-step-1',
  template: `
    <app-companions-amount-container [parent]="paymentRequest"
                                     (successClicked)="onCompanionFormSuccessClick($event)"
    ></app-companions-amount-container>
  `
})
export class SubscriptionStep1Component implements OnInit {
  @Output() success: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
