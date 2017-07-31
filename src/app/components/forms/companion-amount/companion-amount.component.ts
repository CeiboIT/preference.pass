import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-companion-amount',
  template: `
    <div>
      <app-amount-input [parent]="parent" [parentKey]="'kidsAmount'" [placeholder]="'Kids'"></app-amount-input>
      <app-amount-input [parent]="parent" [parentKey]="'adultsAmount'" [placeholder]="'Adults'"></app-amount-input>
      <app-subscription-coming-alone [parent]="parent"></app-subscription-coming-alone>
    </div>
  `
})
export class CompanionAmountComponent implements OnInit {
  @Input() parent: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
