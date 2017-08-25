import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
	selector: 'app-booking-detail-card',
	template: 
		`
		<md-card class="card-row">
			<div class="card-row-inner">
				<div class="card-row-image" [ngStyle]="{'background-image': 'url(' + mainPhoto + ')'}" *ngIf="hasPickUpLocation">
					<div class="card-row-label text-center">{{ pickUpLocation?.name }}</div> 
				</div>
	
				<div class="card-row-body">
					<h2 class="card-row-title">{{ activity?.name }}</h2>
					<div class="card-row-content"><p> {{ activity?.shortDescription || activity?.headline }} </p>
	
					<h2 class="card-row-title" *ngIf="hasPickUpLocation">Departs From</h2>
					<span *ngIf="hasPickUpLocation">{{ pickUpLocation?.name }} - {{ pickUpLocation?.formattedAddress }}</span>
					</div>
				</div>
	
				<div class="card-row-properties">
				<dl>
					<dd>Date</dd><dt>{{ formattedDate }}</dt>
					<dd *ngIf="booking.pickUpTime">Departs at:</dd><dt *ngIf="booking.pickUpTime">{{ booking.pickUpTime }}</dt>
					<dd>Adults</dd><dt>{{ booking.adultsAmount || 1 }}</dt>
					<dd>Kids</dd><dt>{{ booking.kidsAmount || 0 }}</dt>
					<dd>Category</dd><dt>{{ activity?.category?.name }}</dt>
				</dl>
				</div>
			</div>
		</md-card>
		`
	,
	styleUrls: ['./booking-detail-card.component.scss']
})

export class BookingDetailCardComponent implements OnInit {
	@Input() booking;
	@Input() pickUpLocation;
	@Input() activity;
	constructor() { }

	ngOnInit() { }

	get formattedDate() {
		return moment(this.booking.executionDate).format('MMMM Do YYYY');
	}

	get hasPickUpLocation() {
		return this.pickUpLocation && this.pickUpLocation.name;
	}

	get mainPhoto() {
	if (this.pickUpLocation && this.pickUpLocation.mainPhoto) {
		return this.pickUpLocation.mainPhoto[0].url;
	} else {
		return '';
	}
	}
}