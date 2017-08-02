import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-companion-amount',
  template: `
    <div>
      <app-amount-input [parent]="parent" [parentKey]="'kidsAmount'" [placeholder]="'Kids'" [hidden]="hiddeAmountInput"></app-amount-input>
      <app-amount-input [parent]="parent" [parentKey]="'adultsAmount'" [placeholder]="'Adults'" [hidden]="hiddeAmountInput"></app-amount-input>
      <app-subscription-coming-alone [parent]="parent" (comingAloneStatusChange)="comingAloneStatusChange($event)"></app-subscription-coming-alone>
    </div>
  `
})
export class CompanionAmountComponent implements OnInit {
  @Input() parent: FormGroup;
  public hiddeAmountInput: Boolean = false;
  constructor() { }

  ngOnInit() {  }

  comingAloneStatusChange(event) {
    this.hiddeAmountInput = event;

    if(event) {
      this.parent.get("kidsAmount").setValue(0);
      this.parent.get("adultsAmount").setValue(0);
    }
  }


}
