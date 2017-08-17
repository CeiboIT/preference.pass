import { Component, OnInit } from '@angular/core';
import { GetActivitiesByCategory } from '../../../actions/activities';
import { Observable } from 'rxjs/Observable';
import { onStateChangeObservable } from '../../../utils/store';
import { Store } from '@ngrx/store';

@Component({
	selector: 'app-bookings-container',
	template: `
		<h1>Bookings</h1>
		<app-user-bookings [bookings]="bookings$ | async"></app-user-bookings>
	`
})

export class BookingsContainerComponent implements OnInit {
	public bookings$: Observable<any>;
	constructor(
		private store: Store<any>
	  ) { }

	ngOnInit() { 
		this.store.dispatch(new GetActivitiesByCategory({name: 'TOURS', fromLanding: true}));
		this.bookings$ = onStateChangeObservable(this.store, 'activities.tours');
	}
}