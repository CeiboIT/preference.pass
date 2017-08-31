import { Component, OnInit, Input } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-subscription-companion-select',
  template: `
    <div>
      <h2>
        Available companions on this trip
      </h2>
      
      
      
    </div>
  `
})
export class SubscriptionCompanionSelectComponent implements OnInit {
  @Input() parent: FormGroup;
  @Input() companions = [];

  kidsList;
  adultsList;
  selectedCompanionsList;

  constructor() { }

  ngOnInit() {
  }

}
