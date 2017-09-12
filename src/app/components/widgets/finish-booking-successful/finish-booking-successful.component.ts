import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-finish-booking-successful',
	template:
		`
		<div class="text-center">
			<app-success-animation></app-success-animation>
			<h2 class="mt-2">All DONE!</h2>

			<p style="font-size:18px;">Thanks for booking with us,
			We will send your booking confirmation 
			and instructions via email shortly</p>

      <md-dialog-actions>
        <button md-raised-button color="primary" routerLink="/" md-dialog-close class="mb-2 mr-2">
          Go to landing
        </button>
        <!-- Can optionally provide a result for the closing dialog. -->
        <button md-raised-button color="accent" routerLink="/user/bookings" md-dialog-close class="mb-2">
          Go to my bookings list
        </button>
      </md-dialog-actions>
		</div>
		`,
	styleUrls: ['./finish-booking-successful.component.scss']
})

export class FinishBookingSuccessfulComponent implements OnInit {

	constructor() { }

	ngOnInit() { }
}
