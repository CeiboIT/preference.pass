import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-finish-booking-successful',
	template:
		`
		<div class="text-center">
			<app-success-animation></app-success-animation>
			<h2 class="mt-2">All DONE!</h2>

			<p>Thanks for booking with us,
			We will send your booking confirmation 
			and instructions via email shortly</p>

			<button md-raised-button color="primary" routerLink="/">
			  Go to landing
			</button>
			<button md-raised-button color="accent" routerLink="/user/bookings">
			  Go to my bookings list
			</button>
		</div>
		`,
	styleUrls: ['./finish-booking-successful.component.scss']
})

export class FinishBookingSuccessfulComponent implements OnInit {

	constructor() { }

	ngOnInit() { }
}