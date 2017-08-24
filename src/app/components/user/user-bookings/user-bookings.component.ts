import { Component, OnInit, Input } from '@angular/core';
import { resize } from '../../../constants/filestack';
import * as moment from 'moment';

@Component({
	selector: 'app-user-bookings',
	template: `
	<!--<div class="booking" *ngFor="let booking of currentUser?.reservations">
		{{ booking.activity | json }}
	</div>-->
	<div class="bookigns">
		<div class="booking" *ngFor="let booking of currentUser?.reservations">
			<div class="booking-image mr-xl-4 mb-4 mb-xl-0">
				<img [src]="bookingPhoto(booking.activity?.mainPhoto?.url)" alt="{{ booking.activity?.name }}">
			</div>
			<div class="booking-content">
				<h2 class="mt-0 mb-1">
					{{ booking.activity?.name }}
				</h2>
					<p>
					{{ booking.activity?.headline }}
					</p>
			</div>
			<div class="booking-meta mt-4">
				<div class="meta-item"> <i class="fa fa-map-marker"></i> {{ booking.activity?.area?.formatedAddress }}</div>
				<div class="meta-item"><i class="fa fa-calendar-o"></i> {{ getDate(booking.executionDate) }}</div>
				<div class="meta-item"><i class="fa fa-tag"></i> {{ booking.activity?.category?.name }}</div>
				<div class="meta-item"><i class="fa fa-users"></i> {{ calculateCompanions(booking.adultsAmount, booking.kidsAmount ) }} companions</div>
			</div>
		</div>
	</div>
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