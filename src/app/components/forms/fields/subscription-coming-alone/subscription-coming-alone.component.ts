import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-subscription-coming-alone',
  template: `
    <md-checkbox class="mr-1" [checked]="parentValue" (change)="comingAloneChange($event)">I&#39;m coming alone</md-checkbox>
  `
})
export class SubscriptionComingAloneComponent implements OnInit {
  @Input() parent: FormGroup;
  @Output() comingAloneStatusChange: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() { }

  comingAloneChange($event) {
    this.comingAloneStatusChange.emit($event.checked);
  }

  get parentValue() {
    return this.parent.get('isComingAlone').value;
  }

}
