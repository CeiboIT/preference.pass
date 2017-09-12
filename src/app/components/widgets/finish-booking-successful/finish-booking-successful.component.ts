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

			<button md-raised-button md-dialog-close color="primary" routerLink="/" class="mb-2">
			  Go to landing
			</button>
			<button md-raised-button md-dialog-close color="accent" routerLink="/user/bookings" class="mb-2">
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