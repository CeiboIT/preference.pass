import { Component, OnInit, Input } from '@angular/core';
import { resize } from '../../../constants/filestack';
import * as moment from 'moment';

@Component({
	selector: 'app-user-bookings',
	template: `
		<app-booking-detail-card *ngFor="let booking of currentUser?.reservations" [booking]="booking" [activity]="booking.activity" [pickUpLocation]="booking.pickUpLocation"></app-booking-detail-card>
	`,
	styleUrls: ['./user-bookings.component.scss']
})

export class UserBookingsComponent implements OnInit {
	@Input() currentUser;
	constructor() { }

	ngOnInit() { }

	bookingPhoto(url){
		return resize(url, 500, 500);
	}

	getDate(date) {
		return moment(date).format('DD/MM/YYYY');
	}

	calculateCompanions(adultsAmount, kidsAmount) {
		let count = 0;

		count = count + adultsAmount + kidsAmount;

		return count
	}
}