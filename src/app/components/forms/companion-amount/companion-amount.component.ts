import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-companion-amount',
  template: `
    <div>
      <app-amount-input [parent]="parent" 
                        [maxAmount]="adultsLimit"
                        [parentKey]="'adultsAmount'" 
                        [placeholder]="'Adults'" 
      ></app-amount-input>

      <app-amount-input [parent]="parent"
                        [parentKey]="'kidsAmount'" [placeholder]="'Kids'"
                        [maxAmount]="kidsLimit"
      >
      </app-amount-input>
      <!--<app-subscription-coming-alone [parent]="parent" 
       (comingAloneStatusChange)="comingAloneStatusChange($event)">
      </app-subscription-coming-alone>-->
    </div>
  `
})
export class CompanionAmountComponent implements OnInit {
  @Input() parent: FormGroup;
  @Input() kidsLimit;
  @Input() adultsLimit;
  constructor() { }

  ngOnInit() {

    this.parent.get('adultsAmount').valueChanges.subscribe(val => {
      this.isComingAlone();
    })

    this.parent.get('kidsAmount').valueChanges.subscribe(val => {
      this.isComingAlone();
    })
   }

  isComingAlone() {
    let adultsAmount = this.parent.get('adultsAmount').value,
        kidsAmount   = this.parent.get('kidsAmount').value;

    if(adultsAmount == 1 && kidsAmount == 0) {
      this.parent.get('isComingAlone').setValue(true);
    } else {
      this.parent.get('isComingAlone').setValue(false);
    }
  }

}
