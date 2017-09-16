import { Component, Input, OnInit } from '@angular/core';
import { Rate } from '../../../models/rate';
import * as _ from 'lodash';

@Component({
	selector: 'app-ctivity-strike-price',
	template:
		`
			<span class="strike" *ngIf="price && price.currency">{{ price.currency }} {{ price.originalPrice }}</span>
		`,
	styleUrls: ['./activity-strike-price.component.scss']
})

export class ActivityStrikePriceComponent implements OnInit {
	@Input() rates: Rate[];
	price;
	constructor() { }

	ngOnInit() { 
		this.price = _.sortBy(this.rates, 'originalPrice')[0];
	}
}