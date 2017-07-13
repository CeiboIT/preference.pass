import {Component, Input, OnInit} from '@angular/core';
import {Rate} from '../../../../models/rate';
import * as _ from 'lodash';

console.log(_);
@Component({
  selector: 'app-activity-price',
  template: `
    <span *ngIf="lowestRate && lowestRate.currency">
      <strong>{{ lowestRate.currency }} {{ lowestRate.discountPrice }}</strong>
    </span>
  `
})
export class ActivityPriceComponent implements OnInit {
  @Input() rates: Rate[];
  constructor() { }

  ngOnInit() {
  }

  get lowestRate(): Rate {
    return _.sortBy(this.rates, 'discountPrice')[0];
  }


}
