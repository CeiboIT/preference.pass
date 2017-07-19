import { Component, OnInit, Input } from '@angular/core';
import { Rate } from '../../../../models/rate';
import * as _ from 'lodash';

@Component({
	selector: 'app-saving',
	template: `
		<span *ngIf="lowestRate && lowestRate.currency">
			You save {{ totalDiscount }}
    	</span>
	`,
	styles: [

	]
})

export class SavingComponent implements OnInit {
	@Input() rates: Rate[];
	constructor() { }

	ngOnInit() { }

	get lowestRate(): Rate {
    	return _.sortBy(this.rates, 'discountPrice')[0];
	}
	
	get totalDiscount() {
    	return this.lowestRate.currency + ' ' + ( this.lowestRate.originalPrice - this.lowestRate.discountPrice ) ;
 	}
}