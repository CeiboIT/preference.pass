import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-onboardstep2',
  template: `
    <app-subscription-wizard 
      (subscriptionSuccess)="onSubscriptionSuccess($event)"
      (subscriptionError)="onSubscriptionError($event)"
    >
    </app-subscription-wizard>
  `
})
export class Onboardstep2Component implements OnInit {
  @Output() back: EventEmitter<any> = new EventEmitter();
  @Output() onSuccess: EventEmitter<any> = new EventEmitter();
  @Output() onError: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSubscriptionSuccess($event) {
    this.onSuccess.emit($event);
  }

  onSubscriptionError(err) {
    this.onError.emit(err);
  }

}
