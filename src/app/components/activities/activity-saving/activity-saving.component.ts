import { Component, OnInit, Input } from '@angular/core';
import { Rate } from '../../../models/rate';
import * as _ from 'lodash';

@Component({
	selector: 'app-activity-saving',
	template: `
		<span *ngIf="lowestRate && lowestRate.currency">
			Save {{ totalDiscount }}
    	</span>
	`
})

export class ActivitySavingComponent implements OnInit {
	@Input() rates: Rate[];
	constructor() { }

	ngOnInit() { }

	get lowestRate(): Rate {
    	return (this.rates && this.rates.length) ? _.sortBy(this.rates, 'discountPrice')[0] : this.rates;
	}
	
	get totalDiscount() {
    	return this.lowestRate.currency + ' ' + Math.round(( this.lowestRate.originalPrice - this.lowestRate.discountPrice ) * 100) /100 ;
 	}
}