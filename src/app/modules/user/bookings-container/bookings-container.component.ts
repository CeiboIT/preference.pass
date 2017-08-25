import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { onStateChangeObservable } from '../../../utils/store';
import { Store } from '@ngrx/store';

@Component({
	selector: 'app-bookings-container',
	template: `
		<h1>Bookings</h1>
		<app-user-bookings [currentUser]="user$ | async"></app-user-bookings>
	`
})

export class BookingsContainerComponent implements OnInit {
	public user$: Observable<any>;
	constructor(
		private store: Store<any>
	  ) { }

	ngOnInit() { 
		this.user$ = onStateChangeObservable(this.store, 'auth.user');
	}
}