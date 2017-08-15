import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-user-bookings',
	template: `
	<div class="bookigns">
		<div class="booking" *ngFor="let booking of bookings">
			<div class="booking-image mr-xl-4 mb-4 mb-xl-0">
				<img [src]="booking?.mainPhoto?.url" alt="{{ booking?.name }}">
			</div>
			<div class="booking-content">
				<h2 class="mt-0 mb-1">
					{{ booking?.name }}
				</h2>
					<p>
					{{ booking?.headline }}
					</p>
			</div>
			<div class="booking-meta mt-4">
				<div class="meta-item"> <i class="fa fa-map-marker"></i> {{ booking?.area?.formatedAddress }}</div>
				<div class="meta-item"><i class="fa fa-calendar-o"></i> 08/24/2017</div>
				<div class="meta-item"><i class="fa fa-tag"></i> {{ booking?.category?.name }}</div>
				<div class="meta-item"><i class="fa fa-users"></i> 3 companions</div>
			</div>
		</div>
	</div>
	`,
	styleUrls: ['./user-bookings.component.scss']
})

export class UserBookingsComponent implements OnInit {
	@Input() bookings;
	constructor() { }

	ngOnInit() { }
}