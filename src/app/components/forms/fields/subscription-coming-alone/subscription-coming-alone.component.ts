import {Component, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-subscription-coming-alone',
  template: `
    <md-checkbox class="mr-1" (onChange)="comingAloneChange($event)">I&#39;m coming alone</md-checkbox>
  `
})
export class SubscriptionComingAloneComponent implements OnInit {
  @Input() parent: FormGroup;
  constructor() { }

  ngOnInit() {
  }

  comingAloneChange($event) {
    this.parent.get('isComingAlone').setValue($event.value);
  }

}
