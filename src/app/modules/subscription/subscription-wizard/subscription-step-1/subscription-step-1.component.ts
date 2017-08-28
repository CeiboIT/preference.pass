import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-subscription-step-1',
  template: `
    <p>
      Subscription step 1
    </p>
  `
})
export class SubscriptionStep1Component implements OnInit {
  @Output() success: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
