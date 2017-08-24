import { Component, OnInit, Input } from '@angular/core';
import { Rate } from '../../../../models/rate';
import * as _ from 'lodash';

@Component({
	selector: 'app-price-displayer',
	template: `
		<span *ngIf="lowestRate">
			{{ displayPrice }}
		</span>
	`
})

export class PriceDisplayerComponent implements OnInit {
	@Input() rates: Rate[];
	constructor() { }

	ngOnInit() { }

	get lowestRate(): Rate {
    	return _.sortBy(this.rates, 'discountPrice')[0];
	}

	get displayPrice () {
		return (this.rates.length > 1 ? 'from' : 'at') + ' ' + this.lowestRate.discountPrice + ' ' + this.lowestRate.currency;
	}
}
